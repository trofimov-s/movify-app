import { Injectable } from '@angular/core';

import { LocalStorageKeys } from '../enum';

@Injectable({ providedIn: 'root' })
export class LocalStorageHandlerService {
  public setData(key: LocalStorageKeys, value: string): void {
    localStorage.setItem(key, value);
  }

  public getData(key: LocalStorageKeys): string {
    return localStorage.getItem(key);
  }

  public removeData(key: LocalStorageKeys): void {
    localStorage.removeItem(key);
  }

  public clear(): void {
    localStorage.clear();
  }
}
