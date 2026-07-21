import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

type ButtonVariant = 'primary' | 'secondary';

@Component({
  selector: 'app-cta-button',
  imports: [NgClass],
  templateUrl: './cta-button.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CtaButton {
  readonly href = input.required<string>();
  readonly variant = input<ButtonVariant>('primary');
  readonly target = input<string | null>(null);

  protected readonly variantClasses = computed(() =>
    this.variant() === 'primary'
      ? 'border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-600/25 hover:bg-blue-500 hover:border-blue-500'
      : 'border-slate-300 bg-white text-slate-950 hover:border-slate-400 hover:bg-slate-50 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10'
  );
}
