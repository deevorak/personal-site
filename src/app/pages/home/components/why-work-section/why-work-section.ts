import { Component, inject } from '@angular/core';
import { DifferentiatorItem } from '../../../../core/models/site-content.model';
import { ContactService } from '../../../../core/services/contact.service';

@Component({
  selector: 'app-why-work-section',
  standalone: true,
  imports: [],
  templateUrl: './why-work-section.html',
  styleUrl: './why-work-section.scss',
})
export class WhyWorkSection {
  readonly contactService = inject(ContactService);

  readonly differentiators: readonly DifferentiatorItem[] = [
    {
      icon: 'bi-award',
      tag: 'Experiência comprovada',
      title: 'Mais de 20 anos em desenvolvimento corporativo',
      description:
        'Vivência sólida em projetos reais de empresas, garantindo escolhas técnicas maduras, estáveis e fáceis de manter no longo prazo.',
    },
    {
      icon: 'bi-people',
      tag: 'Atendimento ao cidadão',
      title: 'Clareza de fluxo herdada de sistemas públicos',
      description:
        'Atuação em empresa pública com sistemas voltados ao atendimento do cidadão — onde organização de jornada, linguagem simples e confiabilidade são essenciais.',
    },
    {
      icon: 'bi-person-check',
      tag: 'Atuação transparente',
      title: 'Profissional autônomo (Pessoa Física, sem CNPJ)',
      description:
        'Relação direta com quem analisa, projeta e programa. Transparência total sobre formato de contratação, escopo e prioridades, sem camadas comerciais.',
    },
    {
      icon: 'bi-compass',
      tag: 'Visão de negócio',
      title: 'Foco em resolver problemas reais, sem jargões',
      description:
        'A conversa é sempre traduzida para o impacto na rotina da sua empresa: reduzir gargalos, responder melhor os clientes e organizar dados.',
    },
  ];
}
