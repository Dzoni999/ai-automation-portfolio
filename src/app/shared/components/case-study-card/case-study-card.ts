import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type CaseStudyCardData = {
  problemItems: readonly string[];
  solutionItems: readonly string[];
  resultBadge: string;
};

@Component({
  selector: 'app-case-study-card',
  templateUrl: './case-study-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CaseStudyCard {
  readonly caseStudy = input.required<CaseStudyCardData>();
  readonly problemLabel = input.required<string>();
  readonly solutionLabel = input.required<string>();
  readonly resultLabel = input.required<string>();
}
