import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {
  LucideArchive,
  LucideArrowRight,
  LucideCheckCircle2,
  LucideChevronDown,
  LucideClock3,
  LucideFileText,
  LucideScanText,
  LucideShieldCheck,
  LucideTableProperties,
  LucideWrench
} from '@lucide/angular';
import { LanguageService } from '../../core/services/language';
import { SeoService } from '../../core/services/seo';
import { CaseStudyCard } from '../../shared/components/case-study-card/case-study-card';
import { CtaButton } from '../../shared/components/cta-button/cta-button';
import { HeroAutomationVisual } from '../../shared/components/hero-automation-visual/hero-automation-visual';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { ServiceCard } from '../../shared/components/service-card/service-card';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-home',
  imports: [
    CaseStudyCard,
    CtaButton,
    HeroAutomationVisual,
    LucideArchive,
    LucideArrowRight,
    LucideCheckCircle2,
    LucideChevronDown,
    LucideClock3,
    LucideFileText,
    LucideScanText,
    LucideShieldCheck,
    LucideTableProperties,
    LucideWrench,
    RevealOnScroll,
    SectionHeader,
    ServiceCard
  ],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {
  private readonly document = inject(DOCUMENT);
  private readonly languageService = inject(LanguageService);
  private readonly seo = inject(SeoService);

  protected readonly copy = this.languageService.copy;
  protected readonly activeFaq = signal<number | null>(null);

  constructor() {
    effect(() => {
      this.seo.update(this.copy().meta);
    });
  }

  protected toggleFaq(index: number): void {
    this.activeFaq.update((active) => (active === index ? null : index));
  }

  protected sendInquiry(event: SubmitEvent): void {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    const contact = this.copy().home.contact;
    const message = [
      `${contact.form.name}: ${data.get('name')}`,
      `${contact.form.email}: ${data.get('email')}`,
      `${contact.form.company}: ${data.get('company') || '-'}`,
      '',
      `${contact.form.message}:`,
      String(data.get('message') || '')
    ].join('\n');

    this.document.defaultView?.location.assign(
      `mailto:nikolasajic7@gmail.com?subject=${encodeURIComponent(contact.form.subject)}&body=${encodeURIComponent(message)}`
    );
  }
}
