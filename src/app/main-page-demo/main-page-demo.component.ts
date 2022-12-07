import { Component, OnInit } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { MainPageDemoState } from './main-page-demo.model';

@Component({
  selector: 'app-main-page-demo',
  templateUrl: './main-page-demo.component.html',
  styleUrls: ['./main-page-demo.component.css'],
})
export class MainPageDemoComponent
  extends ComponentStore<MainPageDemoState>
  implements OnInit
{
  constructor() {
    super({
      pageMode: 'default',
      isFormReadOnly: true,
    });
  }

  readonly pageMode$: Observable<MainPageDemoState['pageMode']> = this.select(
    (state) => state.pageMode
  );

  readonly isFormReadOnly$: Observable<MainPageDemoState['isFormReadOnly']> =
    this.select((state) => state.isFormReadOnly);

  ngOnInit() {
    console.log(this.pageMode$);
  }

  // readonly defaultPageMode = this.updater((state, mainPageDemoState: MainPageDemoState) => {

  //   return({
  //   pageMode: [...state.pageMode, mainPageDemoState.pageMode],
  //   isFormReadOnly: [...state.isFormReadOnly, mainPageDemoState.isFormReadOnly],
  // })});

  defaultMode() {}
}
