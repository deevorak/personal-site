import { Injectable, computed, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { environment } from '../../../environments/environment';
import {
  CopyFeedbackState,
  SolutionTopicKey,
  SolutionTopicOption,
} from '../models/site-content.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly document = inject(DOCUMENT);

  readonly ownerName = environment.ownerName;
  readonly ownerRole = environment.ownerRole;
  readonly whatsappNumber = environment.whatsappNumber;
  readonly whatsappDisplay = environment.whatsappDisplay;
  readonly email = environment.email;
  readonly emailHref = `mailto:${environment.email}`;

  readonly topicOptions: readonly SolutionTopicOption[] = [
    {
      key: 'geral',
      label: 'Conversa inicial / Diagnóstico geral',
      shortLabel: 'Conversa geral',
      defaultMessage:
        'Olá, Carlos! Vi seu site e gostaria de conversar sobre como melhorar o atendimento, a presença digital ou os processos da minha empresa.',
    },
    {
      key: 'agentes-ia',
      label: 'Agentes de IA para Atendimento',
      shortLabel: 'Agentes de IA',
      defaultMessage:
        'Olá, Carlos! Tenho interesse em um Agente de IA para organizar o primeiro contato, tirar dúvidas e agilizar a triagem de clientes na minha empresa.',
    },
    {
      key: 'sites-corporativos',
      label: 'Sites Corporativos',
      shortLabel: 'Sites Corporativos',
      defaultMessage:
        'Olá, Carlos! Gostaria de conversar sobre a criação de um site corporativo moderno, rápido e focado em gerar contatos para o meu negócio.',
    },
    {
      key: 'automacao-processos',
      label: 'Automação de Processos',
      shortLabel: 'Automação de Processos',
      defaultMessage:
        'Olá, Carlos! Gostaria de reduzir tarefas manuais e conectar rotinas operacionais através de automação de processos na minha empresa.',
    },
    {
      key: 'sistemas-sob-medida',
      label: 'Sistemas Completos sob Medida',
      shortLabel: 'Sistemas sob Medida',
      defaultMessage:
        'Olá, Carlos! Preciso avaliar o desenvolvimento de um sistema sob medida para organizar regras, dados e fluxos próprios da minha operação.',
    },
  ];

  readonly selectedTopic = signal<SolutionTopicKey>('geral');
  readonly customMessage = signal<string>(this.topicOptions[0].defaultMessage);

  readonly whatsappUrl = computed(() => this.buildWhatsAppUrl(this.customMessage()));
  readonly mailtoUrl = computed(() => {
    const topicLabel =
      this.topicOptions.find((t) => t.key === this.selectedTopic())?.shortLabel ?? 'Contato';
    const subject = encodeURIComponent(`Contato pelo site — ${topicLabel}`);
    const body = encodeURIComponent(this.customMessage());
    return `mailto:${this.email}?subject=${subject}&body=${body}`;
  });

  // Estados acessíveis para o padrão copy-button
  readonly emailCopyState = signal<CopyFeedbackState>('idle');
  readonly emailAnnouncement = signal<string>('');
  readonly phoneCopyState = signal<CopyFeedbackState>('idle');
  readonly phoneAnnouncement = signal<string>('');

  private emailTimer?: ReturnType<typeof setTimeout>;
  private phoneTimer?: ReturnType<typeof setTimeout>;
  private lastAnnouncement = '';

  getTopicOption(topic: SolutionTopicKey): SolutionTopicOption {
    return this.topicOptions.find((item) => item.key === topic) ?? this.topicOptions[0];
  }

  getTopicDefaultMessage(topic: SolutionTopicKey): string {
    return this.getTopicOption(topic).defaultMessage;
  }

  selectTopic(topic: SolutionTopicKey): void {
    this.selectedTopic.set(topic);
    this.customMessage.set(this.getTopicDefaultMessage(topic));
  }

  updateMessage(message: string): void {
    this.customMessage.set(message);
  }

  resetMessageToTopic(): void {
    this.customMessage.set(this.getTopicDefaultMessage(this.selectedTopic()));
  }

  buildWhatsAppUrl(message: string): string {
    const trimmed = message.trim() || this.topicOptions[0].defaultMessage;
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(trimmed)}`;
  }

  async copyEmail(): Promise<void> {
    await this.copyText(this.email, 'email');
  }

  async copyPhone(): Promise<void> {
    await this.copyText(this.whatsappDisplay, 'phone');
  }

  scrollToSection(sectionId: string): void {
    const cleanId = sectionId.replace(/^#/, '');
    const target = this.document.getElementById(cleanId);
    if (!target) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    target.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    });
  }

  private async copyText(text: string, target: 'email' | 'phone'): Promise<void> {
    const value = text.trim();
    if (!value) return;

    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else if (!this.legacyCopy(value)) {
        throw new Error('Copy failed');
      }
      this.reportCopy(target, true);
    } catch {
      if (this.legacyCopy(value)) {
        this.reportCopy(target, true);
      } else {
        this.reportCopy(target, false);
      }
    }
  }

  private legacyCopy(text: string): boolean {
    try {
      const field = this.document.createElement('textarea');
      field.value = text;
      field.setAttribute('readonly', '');
      field.style.cssText = 'position:fixed;inset-block-start:0;opacity:0;pointer-events:none;';
      this.document.body.append(field);
      field.select();
      try {
        return this.document.execCommand('copy');
      } finally {
        field.remove();
      }
    } catch {
      return false;
    }
  }

  private reportCopy(target: 'email' | 'phone', ok: boolean): void {
    const isEmail = target === 'email';
    const currentTimer = isEmail ? this.emailTimer : this.phoneTimer;
    if (currentTimer) {
      clearTimeout(currentTimer);
    }

    const baseMessage = ok
      ? isEmail
        ? 'E-mail copiado'
        : 'WhatsApp copiado'
      : 'Não foi possível copiar';

    let announcement = baseMessage;
    if (announcement === this.lastAnnouncement) {
      // Garante reanúncio em leitores de tela como VoiceOver quando o texto se repete
      announcement += '\u00A0';
    }
    this.lastAnnouncement = announcement;

    if (isEmail) {
      this.emailCopyState.set(ok ? 'copied' : 'failed');
      this.emailAnnouncement.set('');
      requestAnimationFrame(() => this.emailAnnouncement.set(announcement));
      this.emailTimer = setTimeout(() => {
        this.emailCopyState.set('idle');
        this.emailAnnouncement.set('');
      }, 2400);
    } else {
      this.phoneCopyState.set(ok ? 'copied' : 'failed');
      this.phoneAnnouncement.set('');
      requestAnimationFrame(() => this.phoneAnnouncement.set(announcement));
      this.phoneTimer = setTimeout(() => {
        this.phoneCopyState.set('idle');
        this.phoneAnnouncement.set('');
      }, 2400);
    }
  }
}
