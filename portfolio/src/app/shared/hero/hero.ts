import { Component, OnDestroy, OnInit, signal } from '@angular/core';

const ROLES = [
  'Java Software Engineer',
  'Spring Boot Developer',
  'Backend API Architect',
  'Microservices Engineer'
];

const TYPE_SPEED_MS = 55;
const DELETE_SPEED_MS = 30;
const HOLD_MS = 1600;

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero implements OnInit, OnDestroy {
  readonly roleText = signal(ROLES[0]);
  readonly tilt = signal('perspective(900px) rotateX(0deg) rotateY(0deg)');

  private roleIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private timer?: ReturnType<typeof setTimeout>;
  private readonly reducedMotion =
    typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;

  ngOnInit(): void {
    if (this.reducedMotion) {
      return;
    }
    this.charIndex = 0;
    this.timer = setTimeout(() => this.type(), TYPE_SPEED_MS);
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }

  onTiltMove(event: MouseEvent): void {
    if (this.reducedMotion) {
      return;
    }
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    const rotateY = px * 10;
    const rotateX = py * -10;
    this.tilt.set(`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  }

  resetTilt(): void {
    this.tilt.set('perspective(900px) rotateX(0deg) rotateY(0deg)');
  }

  private type(): void {
    const current = ROLES[this.roleIndex];

    if (!this.deleting) {
      this.charIndex++;
      this.roleText.set(current.slice(0, this.charIndex));

      if (this.charIndex === current.length) {
        this.deleting = true;
        this.timer = setTimeout(() => this.type(), HOLD_MS);
        return;
      }
    } else {
      this.charIndex--;
      this.roleText.set(current.slice(0, this.charIndex));

      if (this.charIndex === 0) {
        this.deleting = false;
        this.roleIndex = (this.roleIndex + 1) % ROLES.length;
      }
    }

    this.timer = setTimeout(() => this.type(), this.deleting ? DELETE_SPEED_MS : TYPE_SPEED_MS);
  }
}
