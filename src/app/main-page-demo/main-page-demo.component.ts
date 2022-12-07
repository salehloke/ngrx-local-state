import { Component, OnInit } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { MainPageDemoStore } from './main-page-demo.store';

@Component({
  selector: 'app-main-page-demo',
  templateUrl: './main-page-demo.component.html',
  styleUrls: ['./main-page-demo.component.css'],
  providers: [MainPageDemoStore],
})
export class MainPageDemoComponent implements OnInit {
  constructor(private readonly mainPageDemoStore: MainPageDemoStore) {
    this.mainPageDemoStore.patchState({
      pageMode: 'default',
    });
  }

  pageMode$ = this.mainPageDemoStore.pageMode$;

  ngOnInit() {
    // listen to the page mode changes
    this.pageMode$.subscribe((value) => console.log('Page Mode:', value));
  }

  defaultMode() {
    this.mainPageDemoStore.setDefaultPageMode();
  }

  addMode() {
    this.mainPageDemoStore.setAddPageMode();
  }
}
