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
    const pageTitle = 'Consultoria em TI, Agentes de IA e Automação | Carlos Rocha';
    const pageDescription =
      'Agentes de IA, automação de processos, sites corporativos e sistemas sob medida para PMEs. +20 anos em TI corporativa com atendimento direto. Fale no WhatsApp.';

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: pageDescription });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: pageDescription });
    this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: pageDescription });
  }
}
