export type SolutionTopicKey =
  | 'geral'
  | 'agentes-ia'
  | 'sites-corporativos'
  | 'automacao-processos'
  | 'sistemas-sob-medida';

export type CopyFeedbackState = 'idle' | 'copied' | 'failed';

export interface SolutionTopicOption {
  key: SolutionTopicKey;
  label: string;
  shortLabel: string;
  defaultMessage: string;
}

export interface SolutionItem {
  key: SolutionTopicKey;
  badge: string;
  title: string;
  icon: string;
  summary: string;
  practicalResults: string[];
  segmentExamples: string;
  ctaLabel: string;
}

export interface DifferentiatorItem {
  icon: string;
  title: string;
  description: string;
  tag: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  outcome: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface TechItem {
  name: string;
  role: string;
  iconUrl: string;
  secondaryIconUrls?: string[];
  highlight?: boolean;
}

export interface TechChip {
  name: string;
  iconUrl?: string;
  biIcon?: string;
}

export interface TechCategory {
  title: string;
  subtitle: string;
  icon: string;
  badge: string;
  items: TechItem[];
}

