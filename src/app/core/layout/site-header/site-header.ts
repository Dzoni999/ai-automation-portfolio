import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { LanguageService } from '../../services/language';
import { ThemeService } from '../../services/theme';

@Component({
  selector: 'app-site-header',
  imports: [NgClass],
  templateUrl: './site-header.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiteHeader {
  private readonly languageService = inject(LanguageService);
  private readonly themeService = inject(ThemeService);

  protected readonly copy = this.languageService.copy;
  protected readonly language = this.languageService.language;
  protected readonly theme = this.themeService.theme;
  protected readonly menuOpen = signal(false);

  protected readonly navItems = computed(() => {
    const nav = this.copy().nav;
    return [
      { label: nav.home, href: '#top' },
      { label: nav.services, href: '#services' },
      { label: nav.caseStudies, href: '#case-studies' },
      { label: nav.about, href: '#about' },
      { label: nav.contact, href: '#contact' }
    ];
  });

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }

  protected toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
