import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppLanguage } from '@core/enum';
import { TranslateHandlerService } from '@core/services';
import { Dropdown } from '@shared/dropdown';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageComponent {
  private readonly translationKey = 'header.locale';
  public dropdown: Dropdown = {
    list: [
      {
        translationKey: this.buildTranslationKey('en'),
        action: this.changeLanguage.bind(this, AppLanguage.EN),
      },
      {
        translationKey: this.buildTranslationKey('ua'),
        action: this.changeLanguage.bind(this, AppLanguage.UK),
      },
    ],
  };

  constructor(private translateHandlerService: TranslateHandlerService) {}

  public buildTranslationKey(key: string): string {
    return `${this.translationKey}.${key}`;
  }

  private changeLanguage(lang: AppLanguage): void {
    this.translateHandlerService.changeLanguage(lang);
  }
}
