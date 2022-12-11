import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { MainPageDemoComponent } from './main-page-demo/main-page-demo.component';
import { DemoListComponent } from './demo-list/demo-list.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent, HelloComponent, MainPageDemoComponent, DemoListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
