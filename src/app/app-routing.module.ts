import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { MainPageDemoComponent } from './main-page-demo/main-page-demo.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: BasicFormComponent,
  // },
  {
    path: '',
    component: MainPageDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
