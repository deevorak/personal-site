import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactService } from '../../../core/services/contact.service';
import { ThemeService } from '../../../core/services/theme.service';

interface NavLinkItem {
  id: string;
  label: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgbCollapseModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit, OnDestroy {
  readonly contactService = inject(ContactService);
  readonly themeService = inject(ThemeService);
  private readonly document = inject(DOCUMENT);

  readonly isMenuCollapsed = signal(true);
  readonly activeSection = signal<string>('inicio');
  readonly isScrolled = signal(false);

  readonly navLinks: readonly NavLinkItem[] = [
    { id: 'solucoes', label: 'Soluções' },
    { id: 'por-que-trabalhar', label: 'Por que comigo' },
    { id: 'tecnologias', label: 'Tecnologias' },
    { id: 'como-funciona', label: 'Como funciona' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contato', label: 'Contato' },
  ];

  private observer?: IntersectionObserver;
  private scrollListener?: () => void;

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.scrollListener = () => {
        this.isScrolled.set(window.scrollY > 12);
      };
      window.addEventListener('scroll', this.scrollListener, { passive: true });
      this.scrollListener();
    }

    if (typeof IntersectionObserver !== 'undefined') {
      const sectionIds = ['inicio', ...this.navLinks.map((item) => item.id)];
      this.observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          if (visible.length > 0 && visible[0].target.id) {
            this.activeSection.set(visible[0].target.id);
          }
        },
        {
          rootMargin: '-25% 0px -55% 0px',
          threshold: [0.1, 0.35],
        }
      );

      setTimeout(() => {
        for (const id of sectionIds) {
          const el = this.document.getElementById(id);
          if (el) {
            this.observer?.observe(el);
          }
        }
      }, 150);
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (typeof window !== 'undefined' && this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  toggleMenu(): void {
    this.isMenuCollapsed.update((collapsed) => !collapsed);
  }

  navigateTo(sectionId: string, event: Event): void {
    event.preventDefault();
    this.isMenuCollapsed.set(true);
    this.activeSection.set(sectionId);
    this.contactService.scrollToSection(sectionId);
  }
}
