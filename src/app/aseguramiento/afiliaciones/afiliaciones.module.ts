import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfiliacionesRoutingModule } from './afiliaciones-routing.module';
import { NgzorroModule } from 'src/app/ngzorro/ngzorro.module';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SolicitudAfiliacionPageComponent } from './pages/solicitud-afiliacion-page/solicitud-afiliacion-page.component';
import { FormAreaAfiliacionesComponent } from './pages/form-area-afiliaciones/form-area-afiliaciones.component';
import { MenuFormComponent } from './components/menu-form/menu-form.component';




@NgModule({
  declarations: [
    LayoutPageComponent,
    SolicitudAfiliacionPageComponent,
    FormAreaAfiliacionesComponent,
    MenuFormComponent,
  ],
  imports: [
    CommonModule,
    AfiliacionesRoutingModule,
    NgzorroModule,
  ]
})
export class AfiliacionesModule { }
