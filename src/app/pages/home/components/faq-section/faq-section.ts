import { Component, inject } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { FaqItem } from '../../../../core/models/site-content.model';
import { ContactService } from '../../../../core/services/contact.service';

@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [NgbAccordionModule],
  templateUrl: './faq-section.html',
  styleUrl: './faq-section.scss',
})
export class FaqSection {
  readonly contactService = inject(ContactService);

  readonly faqs: readonly FaqItem[] = [
    {
      id: 'faq-segmentos',
      question: 'Você atende pequenas e médias empresas de qualquer segmento?',
      answer:
        'Sim. Embora cada empresa tenha particularidades, os desafios de atendimento ao cliente, presença digital, automação de rotinas e organização de dados acontecem em todos os setores — de clínicas, escritórios e prestadores de serviços a comércios, escolas e pequenas indústrias. Na conversa inicial, entendo a sua operação antes de propor qualquer solução.',
    },
    {
      id: 'faq-pessoa-fisica',
      question: 'Como funciona a contratação sendo profissional autônomo (pessoa física, sem CNPJ)?',
      answer:
        'Atuo de forma totalmente transparente como profissional autônomo (pessoa física, sem CNPJ). Desde o início, combinamos com clareza o escopo, o cronograma por etapas, os valores e a forma de pagamento ou formalização compatível com a realidade da sua empresa — sem intermediários e com contato direto comigo durante todo o projeto.',
    },
    {
      id: 'faq-agentes-ia',
      question: 'Como funcionam os agentes de IA no atendimento? Há risco de respostas erradas?',
      answer:
        'Os agentes de IA são configurados com foco em controle e segurança: trabalham em cima das informações reais do seu negócio, com regras claras do que podem responder, tom adequado ao cliente e critérios definidos para encaminhar situações específicas para atendimento humano. O objetivo é agilizar dúvidas recorrentes e triagem sem improvisos.',
    },
    {
      id: 'faq-projeto-pronto',
      question: 'Preciso já ter todo o projeto desenhado antes de entrar em contato?',
      answer:
        'Não. Basta saber qual problema ou gargalo deseja resolver — por exemplo, demora para responder clientes, tarefas repetitivas em planilhas ou um site que não gera contatos. A partir da conversa inicial, ajudo a organizar o fluxo, priorizar o que traz mais retorno primeiro e estruturar um plano realista.',
    },
    {
      id: 'faq-prazos',
      question: 'Quais são os prazos médios e como acompanho o andamento?',
      answer:
        'O prazo varia conforme o tipo de solução: sites corporativos e automações enxutas costumam sair em poucas semanas, enquanto sistemas sob medida são divididos em entregas parciais. Você acompanha cada etapa com validações práticas antes de avançar para a seguinte.',
    },
    {
      id: 'faq-evolucao',
      question: 'Posso começar com algo pontual, como um site ou automação, e evoluir depois?',
      answer:
        'Sim, inclusive recomendo essa abordagem quando faz sentido para o momento da empresa. Podemos resolver primeiro o ponto mais urgente — como melhorar a página institucional ou automatizar um atendimento — e depois integrar novas automações, agentes de IA ou módulos sob medida.',
    },
  ];
}
