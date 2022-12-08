import { Injectable } from '@angular/core';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';

export interface MainPageDemoState {
  pageMode: string;
  formStatus: FormStatus;
}

export enum FormStatus {
  isReadOnly = 'isReadOnly',
  isEditable = 'isEditable',
  documentOnly = 'documentOnly',
  remarkOnly = 'remarkOnly',
}

@Injectable()
export class MainPageDemoStore extends ComponentStore<MainPageDemoState> {
  constructor(private fb: FormBuilder) {
    // default state is declare here
    super({
      pageMode: 'default',
      formStatus: FormStatus.isReadOnly,
    });
  }

  readonly pageMode$: Observable<string> = this.select(
    (state) => state.pageMode
  );

  readonly formStatus$: Observable<FormStatus> = this.select(
    (state) => state.formStatus
  );

  readonly setDefaultPageMode = this.updater((state) => ({
    ...state,
    pageMode: 'default',
    formStatus: FormStatus.isReadOnly,
  }));

  readonly setAddPageMode = this.updater((state) => ({
    ...state,
    pageMode: 'add',
    formStatus: FormStatus.isEditable,
  }));

  readonly setRemarkOnlyMode = this.updater((state) => ({
    ...state,
    pageMode: 'edit',
    formStatus: FormStatus.remarkOnly,
  }));

  readonly setEditRemarkOnlyPageMode = this.updater((state) => ({
    ...state,
    pageMode: 'edit',
    formStatus: FormStatus.remarkOnly,
  }));

  readonly greetUser = this.effect((name: Observable<string>) => {
    return name;
  });

  // readonly setFormReadOnlyStatus = this.effect(
  //   (pageMode: Observable<string>) => {
  //     return;
  //   }
  // );
}
