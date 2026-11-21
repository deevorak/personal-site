import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactService } from '../../../../core/services/contact.service';
import { WhatsappModal } from '../../../../shared/components/whatsapp-modal/whatsapp-modal';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {
  readonly contactService = inject(ContactService);
  private readonly modalService = inject(NgbModal);

  scrollToSolutions(event: Event): void {
    event.preventDefault();
    this.contactService.scrollToSection('solucoes');
  }

  openCustomWhatsAppModal(): void {
    this.contactService.selectTopic('geral');
    this.modalService.open(WhatsappModal, {
      centered: true,
      size: 'lg',
      ariaLabelledBy: 'whatsappModalTitle',
    });
  }
}
