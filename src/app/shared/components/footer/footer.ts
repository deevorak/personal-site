import { Component, inject, signal } from '@angular/core';
import { ContactService } from '../../../core/services/contact.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly contactService = inject(ContactService);
  readonly currentYear = signal(new Date().getFullYear());

  navigateTo(sectionId: string, event: Event): void {
    event.preventDefault();
    this.contactService.scrollToSection(sectionId);
  }
}
