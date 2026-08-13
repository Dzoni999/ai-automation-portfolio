import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type AutomationVisualCopy = {
  label: string;
  platform: string;
  trigger: string;
  qualify: string;
  route: string;
  summary: string;
  review: string;
  panelTitle: string;
  metricOne: string;
  metricOneValue: string;
  metricTwo: string;
  metricTwoValue: string;
  metricThree: string;
  metricThreeValue: string;
  reviewDetail: string;
  status: string;
};

@Component({
  selector: 'app-hero-automation-visual',
  templateUrl: './hero-automation-visual.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroAutomationVisual {
  readonly visual = input.required<AutomationVisualCopy>();
}
