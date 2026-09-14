import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, inject, input, OnDestroy, PLATFORM_ID, signal } from '@angular/core';

export type CaseStudyCardData = {
  problemItems: readonly string[];
  solutionItems: readonly string[];
  resultBadge: string;
};

export type WorkflowCopy = {
  processEyebrow: string;
  processSubtitle: string;
  processBadge: string;
  process: readonly { title: string; detail: string }[];
};

@Component({
  selector: 'app-case-study-card',
  templateUrl: './case-study-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CaseStudyCard implements AfterViewInit, OnDestroy {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);
  private observer: IntersectionObserver | null = null;
  private timers: number[] = [];

  readonly caseStudy = input.required<CaseStudyCardData>();
  readonly workflow = input.required<WorkflowCopy>();
  readonly problemLabel = input.required<string>();
  readonly solutionLabel = input.required<string>();
  readonly resultLabel = input.required<string>();
  protected readonly activeStep = signal(-1);

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const process = this.element.nativeElement.querySelector('.workflow-process');
    if (!process || !('IntersectionObserver' in window)) {
      this.playWorkflow();
      return;
    }

    this.observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      this.playWorkflow();
      this.observer?.disconnect();
    }, { threshold: 0.32 });
    this.observer.observe(process);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.timers.forEach((timer) => window.clearTimeout(timer));
  }

  private playWorkflow(): void {
    if (this.activeStep() >= 0) return;
    this.workflow().process.forEach((_, index) => {
      const timer = window.setTimeout(() => this.activeStep.set(index), index * 520 + 180);
      this.timers.push(timer);
    });
  }
}
