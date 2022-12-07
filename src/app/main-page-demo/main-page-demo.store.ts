import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';

export interface MainPageDemoState {
  pageMode: string;
  isFormReadOnly: boolean;
}

@Injectable()
export class MainPageDemoStore extends ComponentStore<MainPageDemoState> {
  constructor() {
    super({
      pageMode: 'default',
      isFormReadOnly: false,
    });
  }

  readonly pageMode$: Observable<string> = this.select(
    (state) => state.pageMode
  );

  readonly setDefaultPageMode = this.updater((state) => ({
    ...state,
    pageMode: 'default',
    isFormReadOnly: true,
  }));

  readonly setAddPageMode = this.updater((state) => ({
    ...state,
    pageMode: 'add',
    isFormReadOnly: false,
  }));
}
