import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-float-contact',
  standalone: true,
  templateUrl: './float-contact.html',
  styleUrl: './float-contact.css'
})
export class FloatContact {
  readonly open = signal(false);

  toggle(event: MouseEvent): void {
    event.stopPropagation();
    this.open.update((v) => !v);
  }

  @HostListener('document:click')
  close(): void {
    this.open.set(false);
  }

  @HostListener('document:keydown.escape')
  closeOnEscape(): void {
    this.open.set(false);
  }
}
