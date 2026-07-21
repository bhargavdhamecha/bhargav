import { Directive, ElementRef, OnDestroy, OnInit, inject } from '@angular/core';

const DURATION_MS = 1100;

@Directive({
  selector: '[appCountUp]',
  standalone: true
})
export class CountUp implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const raw = this.el.nativeElement.textContent?.trim() ?? '';
    const match = raw.match(/^(\D*)(\d+)(\D*)$/);
    const reducedMotion =
      typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!match || reducedMotion || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const [, prefix, numberStr, suffix] = match;
    const target = parseInt(numberStr, 10);
    this.el.nativeElement.textContent = `${prefix}0${suffix}`;

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.animate(prefix, target, suffix);
          this.observer?.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private animate(prefix: string, target: number, suffix: string): void {
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / DURATION_MS, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      this.el.nativeElement.textContent = `${prefix}${Math.round(target * eased)}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }
}
