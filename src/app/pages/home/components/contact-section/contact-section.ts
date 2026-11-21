import { Component, inject } from '@angular/core';
import { ContactService } from '../../../../core/services/contact.service';
import { SolutionTopicKey } from '../../../../core/models/site-content.model';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
})
export class ContactSection {
  readonly contactService = inject(ContactService);

  selectTopic(key: SolutionTopicKey): void {
    this.contactService.selectTopic(key);
  }

  onMessageInput(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    this.contactService.updateMessage(textarea.value);
  }
}
