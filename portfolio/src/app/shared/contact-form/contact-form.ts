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
      case 'sending':
        return 'Sending…';
      case 'sent':
        return 'Message sent — thanks, I\u2019ll get back to you soon.';
      case 'error':
        return 'Could not reach the server. Is the Spring Boot backend running on :8080?';
      default:
        return 'Posts to /api/contact on the Spring Boot backend.';
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
      },
      error: () => this.status.set('error')
    });
  }
}
