import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
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
    RevealOnScroll,
    SectionHeader,
    ServiceCard
  ],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {
  private readonly languageService = inject(LanguageService);
  private readonly seo = inject(SeoService);

  protected readonly copy = this.languageService.copy;

  constructor() {
    effect(() => {
      this.seo.update(this.copy().meta);
    });
  }
}
