import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from 'src/app/shared/pages/error404-page/error404-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SolicitudAfiliacionPageComponent } from './pages/solicitud-afiliacion-page/solicitud-afiliacion-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'solicitud-afiliacion', component: SolicitudAfiliacionPageComponent },
      { path: '**', component: Error404PageComponent  }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AfiliacionesRoutingModule { }
