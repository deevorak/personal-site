import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { HeroSection } from './components/hero-section/hero-section';
import { SolutionsSection } from './components/solutions-section/solutions-section';
import { WhyWorkSection } from './components/why-work-section/why-work-section';
import { TechStackSection } from './components/tech-stack-section/tech-stack-section';
import { HowItWorksSection } from './components/how-it-works-section/how-it-works-section';
import { FaqSection } from './components/faq-section/faq-section';
import { ContactSection } from './components/contact-section/contact-section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSection,
    SolutionsSection,
    WhyWorkSection,
    TechStackSection,
    HowItWorksSection,
    FaqSection,
    ContactSection,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  constructor() {
    this.title.setTitle(
      'Carlos Rocha Consultoria em TI | Agentes de IA, Automação e Software sob Medida'
    );
    this.meta.updateTag({
      name: 'description',
      content:
        'Carlos Rocha Consultoria em TI — Analista de TI e Desenvolvedor de Software autônomo (pessoa física, sem CNPJ) com +20 anos de experiência corporativa e atuação em sistemas de atendimento ao cidadão. Agentes de IA, sites corporativos, automação e sistemas sob medida.',
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Carlos Rocha Consultoria em TI | Agentes de IA, Automação e Software sob Medida',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Soluções em agentes de IA para atendimento, sites corporativos, automação de processos e sistemas sob medida para pequenas e médias empresas de qualquer segmento.',
    });
  }
}
