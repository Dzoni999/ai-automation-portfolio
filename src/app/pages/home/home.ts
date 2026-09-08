import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import {
  LucideArchive,
  LucideArrowRight,
  LucideCheckCircle2,
  LucideChevronDown,
  LucideFileText,
  LucideScanText,
  LucideShieldCheck,
  LucideTableProperties
} from '@lucide/angular';
import { LanguageService } from '../../core/services/language';
import { SeoService } from '../../core/services/seo';
import { CaseStudyCard } from '../../shared/components/case-study-card/case-study-card';
import { CtaButton } from '../../shared/components/cta-button/cta-button';
import { HeroAutomationVisual } from '../../shared/components/hero-automation-visual/hero-automation-visual';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { ServiceCard } from '../../shared/components/service-card/service-card';
import { TrustBadges } from '../../shared/components/trust-badges/trust-badges';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

type InquiryField = 'name' | 'email' | 'company' | 'message';

type InquiryErrors = Partial<Record<InquiryField, string>>;

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
    LucideFileText,
    LucideScanText,
    LucideShieldCheck,
    LucideTableProperties,
    RevealOnScroll,
    SectionHeader,
    ServiceCard,
    TrustBadges
  ],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {
  private readonly languageService = inject(LanguageService);
  private readonly seo = inject(SeoService);

  protected readonly copy = this.languageService.copy;
  protected readonly activeFaq = signal<number | null>(null);
  protected readonly inquiryStatus = signal<'idle' | 'sending' | 'success' | 'error'>('idle');
  protected readonly inquiryMessage = signal('');
  protected readonly inquiryErrors = signal<InquiryErrors>({});

  constructor() {
    effect(() => {
      this.seo.update(this.copy().meta);
    });
  }

  protected toggleFaq(index: number): void {
    this.activeFaq.update((active) => (active === index ? null : index));
  }

  protected async sendInquiry(event: SubmitEvent): Promise<void> {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    const contact = this.copy().home.contact;

    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const company = String(data.get('company') || '').trim();
    const message = String(data.get('message') || '').trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errors: InquiryErrors = {};

    if (!name) errors.name = contact.form.validation.name;
    if (!email) errors.email = contact.form.validation.emailRequired;
    else if (!emailPattern.test(email)) errors.email = contact.form.validation.emailInvalid;
    if (!company) errors.company = contact.form.validation.company;
    if (!message) errors.message = contact.form.validation.message;

    if (Object.keys(errors).length > 0) {
      this.inquiryStatus.set('error');
      this.inquiryMessage.set(contact.form.validationError);
      this.inquiryErrors.set(errors);
      form.reportValidity();
      return;
    }

    this.inquiryStatus.set('sending');
    this.inquiryMessage.set(contact.form.sending);

    try {
      const response = await fetch('https://formspree.io/f/xbgjyqvp', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          company,
          message,
          _replyto: email,
          _subject: contact.form.subject
        })
      });

      if (!response.ok) {
        let message: string = contact.form.submitError;
        try {
          const payload = (await response.json()) as { errors?: Array<{ message?: string }> };
          const apiMessage = payload?.errors?.[0]?.message;
          if (apiMessage) message = apiMessage;
        } catch {
          // ignore JSON parsing errors and fall back to the generic message
        }

        this.inquiryStatus.set('error');
        this.inquiryMessage.set(message);
        return;
      }

      this.inquiryStatus.set('success');
      this.inquiryMessage.set(contact.form.success);
      this.inquiryErrors.set({});
      form.reset();
    } catch {
      this.inquiryStatus.set('error');
      this.inquiryMessage.set(contact.form.submitError);
    }
  }
}
