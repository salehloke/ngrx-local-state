import { Injectable } from '@angular/core';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';

export interface MainPageDemoState {
  pageMode: string;
  isFormReadOnly: boolean;
  basicForm: UntypedFormGroup;
}

@Injectable()
export class MainPageDemoStore extends ComponentStore<MainPageDemoState> {
  constructor(private fb: FormBuilder) {
    // default state is declare here
    super({
      pageMode: 'default',
      isFormReadOnly: false,
      basicForm: fb.group({
        name: [''],
        age: 0,
      }),
    });
  }

  readonly pageMode$: Observable<string> = this.select(
    (state) => state.pageMode
  );

  readonly isFormReadOnly$: Observable<boolean> = this.select(
    (state) => state.isFormReadOnly
  );

  readonly basicForm$: Observable<UntypedFormGroup> = this.select(
    (state) => state.basicForm
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

  // readonly setFormReadOnlyStatus = this.effect(
  //   (pageMode: Observable<string>) => {
  //     return;
  //   }
  // );
}
