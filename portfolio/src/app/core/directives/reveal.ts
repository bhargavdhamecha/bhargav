import { Directive, ElementRef, HostBinding, Input, OnDestroy, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class Reveal implements OnInit, OnDestroy {
  @Input() appRevealDelay = 0;

  @HostBinding('class.reveal') readonly revealClass = true;
  @HostBinding('class.is-visible') visible = false;

  private readonly el = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    if (typeof IntersectionObserver === 'undefined') {
      this.visible = true;
      return;
    }

    this.el.nativeElement.style.transitionDelay = `${this.appRevealDelay}ms`;

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.visible = true;
          this.observer?.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
