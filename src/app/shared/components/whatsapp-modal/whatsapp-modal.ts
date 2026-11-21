import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactService } from '../../../core/services/contact.service';
import { SolutionTopicKey } from '../../../core/models/site-content.model';

@Component({
  selector: 'app-whatsapp-modal',
  standalone: true,
  imports: [],
  templateUrl: './whatsapp-modal.html',
  styleUrl: './whatsapp-modal.scss',
})
export class WhatsappModal {
  readonly activeModal = inject(NgbActiveModal);
  readonly contactService = inject(ContactService);

  onTopicChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.contactService.selectTopic(select.value as SolutionTopicKey);
  }

  onMessageInput(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    this.contactService.updateMessage(textarea.value);
  }
}
