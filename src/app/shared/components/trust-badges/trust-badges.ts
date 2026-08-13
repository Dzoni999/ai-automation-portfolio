import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LucideCheckCircle2, LucideClock3, LucideWrench } from '@lucide/angular';

export type TrustBadgeData = {
  title: string;
  icon: 'clock' | 'check' | 'wrench';
};

@Component({
  selector: 'app-trust-badges',
  imports: [LucideCheckCircle2, LucideClock3, LucideWrench],
  templateUrl: './trust-badges.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrustBadges {
  readonly items = input.required<readonly TrustBadgeData[]>();
}
