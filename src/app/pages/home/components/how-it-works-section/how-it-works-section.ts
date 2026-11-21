import { Component } from '@angular/core';
import { ProcessStep } from '../../../../core/models/site-content.model';

@Component({
  selector: 'app-how-it-works-section',
  standalone: true,
  imports: [],
  templateUrl: './how-it-works-section.html',
  styleUrl: './how-it-works-section.scss',
})
export class HowItWorksSection {
  readonly steps: readonly ProcessStep[] = [
    {
      stepNumber: '01',
      title: 'Conversa inicial e entendimento do cenário',
      description:
        'Alinhamento rápido para entender como sua empresa atende hoje, onde estão os gargalos operacionais e qual resultado você espera alcançar.',
      outcome: 'Sem compromisso e sem termos técnicos desnecessários.',
    },
    {
      stepNumber: '02',
      title: 'Definição de escopo, etapas e proposta',
      description:
        'Organização clara do que será construído, divisão em entregas objetivas, prazos realistas e condições transparentes como profissional autônomo.',
      outcome: 'Previsibilidade do que entra em cada fase do projeto.',
    },
    {
      stepNumber: '03',
      title: 'Desenvolvimento e validação',
      description:
        'Construção acompanhada de perto, com demonstrações práticas ao longo do processo para validar textos, fluxos e regras junto à sua equipe.',
      outcome: 'Ajustes em tempo hábil para aderência total à operação.',
    },
    {
      stepNumber: '04',
      title: 'Publicação, ajustes e próximos passos',
      description:
        'Entrada em produção assistida, orientações objetivas de uso para o time, refinamentos pós-lançamento e suporte para futuras evoluções.',
      outcome: 'Solução no ar com tranquilidade e autonomia para a empresa.',
    },
  ];
}
