import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import {
  LucideBot,
  LucideFileText,
  LucideMailCheck,
  LucideWorkflow
} from '@lucide/angular';

export type ServiceCardData = {
  title: string;
  text: string;
  icon: 'document' | 'email' | 'chatbot' | 'workflow';
};

@Component({
  selector: 'app-service-card',
  imports: [LucideBot, LucideFileText, LucideMailCheck, LucideWorkflow],
  templateUrl: './service-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceCard {
  readonly service = input.required<ServiceCardData>();
}
