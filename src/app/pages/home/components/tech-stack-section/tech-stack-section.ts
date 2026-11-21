import { Component } from '@angular/core';
import { TechCategory, TechChip } from '../../../../core/models/site-content.model';

@Component({
  selector: 'app-tech-stack-section',
  standalone: true,
  imports: [],
  templateUrl: './tech-stack-section.html',
  styleUrl: './tech-stack-section.scss',
})
export class TechStackSection {
  readonly categories: readonly TechCategory[] = [
    {
      title: 'Backend Corporativo & Segurança de Acesso',
      subtitle: 'Base sólida para regras de negócio críticas, APIs e controle de usuários.',
      icon: 'bi-shield-lock',
      badge: 'Robustez & Acesso',
      items: [
        {
          name: 'Java 25',
          role: 'Linguagem corporativa moderna, de alta performance e estabilidade para sistemas duradouros.',
          iconUrl: 'icons/tech/java.svg',
          highlight: true,
        },
        {
          name: 'Spring Boot',
          role: 'Framework líder de mercado para estruturar APIs seguras, organizadas e fáceis de evoluir.',
          iconUrl: 'icons/tech/spring.svg',
          highlight: true,
        },
        {
          name: 'Keycloak',
          role: 'Gestão centralizada de login, perfis de acesso e autenticação segura (SSO / OAuth2).',
          iconUrl: 'icons/tech/keycloak.svg',
          highlight: true,
        },
      ],
    },
    {
      title: 'Agentes de IA, Automação & Eventos',
      subtitle: 'Fluxos inteligentes, integrações entre sistemas e processamento confiável em tempo real.',
      icon: 'bi-cpu',
      badge: 'IA & Orquestração',
      items: [
        {
          name: 'n8n',
          role: 'Orquestração ágil de automações, webhooks, atendimento no WhatsApp e fluxos com IA.',
          iconUrl: 'icons/tech/n8n.svg',
          highlight: true,
        },
        {
          name: 'Apache Kafka',
          role: 'Mensageria e eventos assíncronos para integrar rotinas de alto volume sem perder dados.',
          iconUrl: 'icons/tech/kafka.svg',
          highlight: true,
        },
        {
          name: 'APIs REST, Webhooks & LLMs',
          role: 'Conexão controlada entre canais de atendimento, modelos de IA e regras da empresa.',
          iconUrl: 'icons/tech/openai.svg',
        },
      ],
    },
    {
      title: 'Dados, Memória para IA & Armazenamento',
      subtitle: 'Persistência confiável, respostas rápidas e busca inteligente sobre documentos da empresa.',
      icon: 'bi-database-check',
      badge: 'Dados & RAG',
      items: [
        {
          name: 'PostgreSQL com pgvector',
          role: 'Banco de dados relacional robusto com busca vetorial para agentes de IA consultarem sua base com precisão.',
          iconUrl: 'icons/tech/postgres.svg',
          highlight: true,
        },
        {
          name: 'Redis',
          role: 'Cache e controle de estado em memória para respostas instantâneas, filas e sessões.',
          iconUrl: 'icons/tech/redis.svg',
          highlight: true,
        },
        {
          name: 'Cloudflare R2',
          role: 'Armazenamento em nuvem de documentos, anexos e arquivos com alta disponibilidade e baixo custo.',
          iconUrl: 'icons/tech/cloudflare.svg',
          highlight: true,
        },
      ],
    },
    {
      title: 'Infraestrutura, Containers & Front-end',
      subtitle: 'Implantação previsível, escalável e ajustada ao porte e orçamento de cada operação.',
      icon: 'bi-hdd-network',
      badge: 'Deploy & Interface',
      items: [
        {
          name: 'Docker',
          role: 'Empacotamento em containers para implantação limpa, reproduzível e rápida em qualquer servidor.',
          iconUrl: 'icons/tech/docker.svg',
          highlight: true,
        },
        {
          name: 'Kubernetes',
          role: 'Orquestração de containers com alta disponibilidade e escala quando o projeto exige maior porte.',
          iconUrl: 'icons/tech/kubernetes.svg',
          highlight: true,
        },
        {
          name: 'VPS Linux, Angular & Bootstrap',
          role: 'Servidores dimensionados sob medida (sem desperdício) e interfaces web rápidas e responsivas.',
          iconUrl: 'icons/tech/linux-tux.svg',
          secondaryIconUrls: ['icons/tech/angular.svg', 'icons/tech/bootstrap.svg'],
        },
      ],
    },
  ];

  readonly stackHighlights: readonly TechChip[] = [
    { name: 'Docker', iconUrl: 'icons/tech/docker.svg' },
    { name: 'Java 25', iconUrl: 'icons/tech/java.svg' },
    { name: 'Spring Boot', iconUrl: 'icons/tech/spring.svg' },
    { name: 'Keycloak', iconUrl: 'icons/tech/keycloak.svg' },
    { name: 'Redis', iconUrl: 'icons/tech/redis.svg' },
    { name: 'Apache Kafka', iconUrl: 'icons/tech/kafka.svg' },
    { name: 'n8n', iconUrl: 'icons/tech/n8n.svg' },
    { name: 'PostgreSQL + pgvector', iconUrl: 'icons/tech/postgres.svg' },
    { name: 'Cloudflare R2', iconUrl: 'icons/tech/cloudflare.svg' },
    { name: 'VPS Linux', iconUrl: 'icons/tech/linux-tux.svg' },
    { name: 'Kubernetes', iconUrl: 'icons/tech/kubernetes.svg' },
    { name: 'Angular', iconUrl: 'icons/tech/angular.svg' },
    { name: 'Bootstrap', iconUrl: 'icons/tech/bootstrap.svg' },
    { name: 'Git & CI/CD', iconUrl: 'icons/tech/git.svg' },
    { name: 'APIs REST & Webhooks', biIcon: 'bi-plug' },
  ];
}
