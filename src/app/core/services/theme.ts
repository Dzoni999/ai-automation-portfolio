import { DOCUMENT } from '@angular/common';
import { effect, inject, Injectable, signal } from '@angular/core';

type Theme = 'dark' | 'light';

const themeStorageKey = 'nikola-sajic-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly themeSignal = signal<Theme>(this.readInitialTheme());

  readonly theme = this.themeSignal.asReadonly();

  constructor() {
    effect(() => {
      const theme = this.themeSignal();
      this.document.documentElement.classList.toggle('dark', theme === 'dark');
      this.document.documentElement.style.colorScheme = theme;
      this.updateThemeColor(theme);
      this.storeTheme(theme);
    });
  }

  toggleTheme(): void {
    this.themeSignal.update((theme) => (theme === 'dark' ? 'light' : 'dark'));
  }

  private readInitialTheme(): Theme {
    if (typeof localStorage === 'undefined') {
      return 'dark';
    }

    return localStorage.getItem(themeStorageKey) === 'light' ? 'light' : 'dark';
  }

  private storeTheme(theme: Theme): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(themeStorageKey, theme);
    }
  }

  private updateThemeColor(theme: Theme): void {
    const existing = this.document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    const themeColor = existing ?? this.document.createElement('meta');

    themeColor.name = 'theme-color';
    themeColor.content = theme === 'dark' ? '#05070a' : '#f8fafc';

    if (!existing) {
      this.document.head.appendChild(themeColor);
    }
  }
}
