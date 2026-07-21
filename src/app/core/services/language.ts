import { DOCUMENT } from '@angular/common';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { LanguageCode, SiteCopy, translations } from '../data/translations';

const languageStorageKey = 'nikola-sajic-language';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly languageSignal = signal<LanguageCode>(this.readInitialLanguage());

  readonly language = this.languageSignal.asReadonly();
  readonly copy = computed<SiteCopy>(() => translations[this.languageSignal()]);

  constructor() {
    effect(() => {
      const language = this.languageSignal();
      this.document.documentElement.lang = language;
      this.storeLanguage(language);
    });
  }

  setLanguage(language: LanguageCode): void {
    this.languageSignal.set(language);
  }

  toggleLanguage(): void {
    this.languageSignal.update((language) => (language === 'en' ? 'sr' : 'en'));
  }

  private readInitialLanguage(): LanguageCode {
    if (typeof localStorage === 'undefined') {
      return 'en';
    }

    const storedLanguage = localStorage.getItem(languageStorageKey);
    return storedLanguage === 'sr' ? 'sr' : 'en';
  }

  private storeLanguage(language: LanguageCode): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(languageStorageKey, language);
    }
  }
}
