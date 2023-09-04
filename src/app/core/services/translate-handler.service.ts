import { Injectable } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { BehaviorSubject, Observable, filter, shareReplay, take } from 'rxjs';

import { AppLanguage, LocalStorageKeys } from '../enum';
import { LocalStorageHandlerService } from './local-storage-handler.service';

@Injectable({ providedIn: 'root' })
export class TranslateHandlerService {
  private supportLanguages = Object.values(AppLanguage);
  private _currentLang$ = new BehaviorSubject<AppLanguage>(null);

  public get currentLang$(): Observable<AppLanguage> {
    return this._currentLang$.asObservable().pipe(filter(Boolean), shareReplay());
  }

  private get browserLang(): AppLanguage {
    return this.translateService.getBrowserLang() as AppLanguage;
  }

  public get changeLangListener(): Observable<LangChangeEvent> {
    return this.translateService.onLangChange.pipe(take(1));
  }

  constructor(
    private translateService: TranslateService,
    private localStorageHandler: LocalStorageHandlerService,
  ) {}

  public init(): void {
    const preferredLang = this.localStorageHandler.getData(LocalStorageKeys.LANG) as AppLanguage;

    if (preferredLang) {
      this.translateService.use(preferredLang);
      this._currentLang$.next(preferredLang);
    } else if (this.browserLang && this.supportLanguages.includes(this.browserLang)) {
      this.translateService.use(this.browserLang);
      this.updateStorage(this.browserLang);
    } else {
      this.translateService.use(AppLanguage.EN);
      this.updateStorage(AppLanguage.EN);
    }
  }

  public changeLanguage(lang: AppLanguage): void {
    if (this._currentLang$.getValue() === lang) {
      return;
    }

    this.translateService.use(lang);
    this.updateStorage(lang);
  }

  private updateStorage(lang: AppLanguage): void {
    this._currentLang$.next(lang);
    this.localStorageHandler.setData(LocalStorageKeys.LANG, lang);
  }
}
