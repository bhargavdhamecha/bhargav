import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../../core/services/contact.service';

type Status = 'idle' | 'sending' | 'sent' | 'error';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css'
})
export class ContactForm {
  private fb = inject(FormBuilder);
  private contactService = inject(ContactService);

  status = signal<Status>('idle');

  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  get note(): string {
    switch (this.status()) {
      case 'sent':
        return 'Message sent successfully — thanks, I’ll get back to you soon.';
      case 'error':
        return 'Something went wrong sending your message. Please try again.';
      default:
        return '';
    }
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.status.set('sending');
    this.contactService.send(this.form.getRawValue()).subscribe({
      next: () => {
        this.status.set('sent');
        this.form.reset();
        this.dismissNoteAfterDelay();
      },
      error: () => {
        this.status.set('error');
        this.dismissNoteAfterDelay();
      }
    });
  }

  private dismissNoteAfterDelay(): void {
    setTimeout(() => this.status.set('idle'), 4000);
  }
}
