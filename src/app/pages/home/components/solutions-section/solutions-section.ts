import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SolutionItem, SolutionTopicKey } from '../../../../core/models/site-content.model';
import { ContactService } from '../../../../core/services/contact.service';
import { WhatsappModal } from '../../../../shared/components/whatsapp-modal/whatsapp-modal';

@Component({
  selector: 'app-solutions-section',
  standalone: true,
  imports: [],
  templateUrl: './solutions-section.html',
  styleUrl: './solutions-section.scss',
})
export class SolutionsSection {
  readonly contactService = inject(ContactService);
  private readonly modalService = inject(NgbModal);

  readonly solutions: readonly SolutionItem[] = [
    {
      key: 'agentes-ia',
      badge: 'Atendimento inteligente',
      title: 'Agentes de IA para Atendimento',
      icon: 'bi-robot',
      summary:
        'Assistentes e fluxos inteligentes para tirar dúvidas, triar demandas, orientar clientes e agilizar o primeiro contato com regras e limites bem definidos.',
      practicalResults: [
        'Respostas rápidas sobre serviços, horários, requisitos e orientações iniciais.',
        'Triagem organizada antes de encaminhar o cliente para a sua equipe.',
        'Limites claros do que a IA responde e quando acionar atendimento humano.',
      ],
      segmentExamples: 'Clínicas, escritórios, prestadores de serviços, comércios e atendimento local.',
      ctaLabel: 'Conversar sobre Agentes de IA',
    },
    {
      key: 'sites-corporativos',
      badge: 'Presença digital',
      title: 'Sites Corporativos',
      icon: 'bi-globe2',
      summary:
        'Sites institucionais e páginas de apresentação claras, rápidas e responsivas para fortalecer a presença digital e gerar contatos.',
      practicalResults: [
        'Comunicação direta do que a empresa faz e por que vale conversar com você.',
        'Layout rápido e legível em celulares, tablets e computadores.',
        'Botões estratégicos para WhatsApp e e-mail sem distrações visuais.',
      ],
      segmentExamples: 'Empresas que buscam credibilidade profissional e conversão fora das redes sociais.',
      ctaLabel: 'Conversar sobre Site Corporativo',
    },
    {
      key: 'automacao-processos',
      badge: 'Eficiência operacional',
      title: 'Automação de Processos',
      icon: 'bi-arrow-repeat',
      summary:
        'Redução de tarefas repetitivas e manuais, conectando rotinas e tornando o dia a dia operacional mais fluido.',
      practicalResults: [
        'Menos retrabalho copiando informações entre formulários, planilhas e atendimentos.',
        'Notificações, registros e encaminhamentos executados de forma automática.',
        'Mais tempo da equipe dedicado a vendas, entregas e atendimento estratégico.',
      ],
      segmentExamples: 'Rotinas administrativas, cadastros, aprovações, envios e fluxos internos.',
      ctaLabel: 'Conversar sobre Automação',
    },
    {
      key: 'sistemas-sob-medida',
      badge: 'Operação personalizada',
      title: 'Sistemas Completos sob Medida',
      icon: 'bi-layers',
      summary:
        'Aplicações e soluções personalizadas quando a operação precisa de regras próprias, organização de dados ou fluxos específicos.',
      practicalResults: [
        'Ferramenta moldada ao processo real da empresa, em vez de adaptar o negócio a planilhas soltas.',
        'Organização segura de cadastros, históricos, pedidos ou atendimentos.',
        'Base estruturada para crescer em etapas conforme o orçamento e a prioridade.',
      ],
      segmentExamples: 'Operações com regras particulares que ferramentas genéricas não atendem bem.',
      ctaLabel: 'Conversar sobre Sistema sob Medida',
    },
  ];

  readonly segments: readonly string[] = [
    'Prestação de Serviços',
    'Saúde e Clínicas',
    'Escritórios e Consultorias',
    'Comércio e Varejo',
    'Pequenas Indústrias',
    'Educação e Treinamentos',
  ];

  openTopicInquiry(topic: SolutionTopicKey): void {
    this.contactService.selectTopic(topic);
    this.modalService.open(WhatsappModal, {
      centered: true,
      size: 'lg',
      ariaLabelledBy: 'whatsappModalTitle',
    });
  }
}
