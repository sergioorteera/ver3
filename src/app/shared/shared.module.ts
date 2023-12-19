import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { NgzorroModule } from '../ngzorro/ngzorro.module';



@NgModule({
  declarations: [
    Error404PageComponent
  ],
  exports: [
    Error404PageComponent,
  ],
  imports: [
    NgzorroModule
  ]
})
export class SharedModule { }
