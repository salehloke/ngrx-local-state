import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';
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
  pageMode$ = this.mainPageDemoStore.pageMode$;
  isFormReadOnly$ = this.mainPageDemoStore.isFormReadOnly$;

  basicForm: UntypedFormGroup;
  constructor(
    private readonly mainPageDemoStore: MainPageDemoStore,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    // listen to the page mode changes
    this.initForm();
  }

  initForm() {
    this.basicForm = this.fb.group({
      name: [''],
      age: 0,
    });
    this.basicForm.controls.name.valueChanges.subscribe((value) => {
      console.log('name:', value);
    });

    /// control form readonly
    this.pageMode$.subscribe((value) => console.log('Page Mode:', value));
    this.isFormReadOnly$.subscribe((isReadOnly) => {
      console.log('isReadOnly:', isReadOnly);
      this.basicForm.disable();
    });
  }

  defaultMode() {
    this.mainPageDemoStore.setDefaultPageMode();
  }

  addMode() {
    this.mainPageDemoStore.setAddPageMode();
  }
}
