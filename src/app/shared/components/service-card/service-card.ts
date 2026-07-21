import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type ServiceCardData = {
  title: string;
  price: string;
  text: string;
};

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceCard {
  readonly service = input.required<ServiceCardData>();
}
