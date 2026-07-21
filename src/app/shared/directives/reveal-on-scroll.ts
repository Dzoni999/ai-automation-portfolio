import { isPlatformBrowser } from '@angular/common';
import {
  Directive,
  ElementRef,
  inject,
  input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appReveal]'
})
export class RevealOnScroll implements OnInit, OnDestroy {
  readonly delay = input(0, { alias: 'appRevealDelay' });

  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly renderer = inject(Renderer2);
  private observer: IntersectionObserver | null = null;
  private cleanupTransitionEnd: (() => void) | null = null;

  ngOnInit(): void {
    const nativeElement = this.element.nativeElement;
    this.renderer.addClass(nativeElement, 'reveal');
    this.renderer.setStyle(nativeElement, 'transition-delay', `${this.delay()}ms`);
    this.cleanupTransitionEnd = this.renderer.listen(nativeElement, 'transitionend', () => {
      this.renderer.addClass(nativeElement, 'is-complete');
    });

    if (!isPlatformBrowser(this.platformId) || !('IntersectionObserver' in window)) {
      this.renderer.addClass(nativeElement, 'is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        this.renderer.addClass(nativeElement, 'is-visible');
        this.observer?.disconnect();
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.16 }
    );

    this.observer.observe(nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.cleanupTransitionEnd?.();
  }
}
