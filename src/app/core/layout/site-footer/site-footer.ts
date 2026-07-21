import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiteFooter {
  protected readonly copy = inject(LanguageService).copy;
  protected readonly year = new Date().getFullYear();
}
