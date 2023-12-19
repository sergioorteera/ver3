import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Error404PageComponent } from 'src/app/shared/pages/error404-page/error404-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SolicitudAfiliacionPageComponent } from './pages/solicitud-afiliacion-page/solicitud-afiliacion-page.component';
import { FormAreaAfiliacionesComponent } from './pages/form-area-afiliaciones/form-area-afiliaciones.component';
import { FormCotizanteComponent } from './pages/form-cotizante/form-cotizante.component';
import { FormGrupoFamiliarComponent } from './pages/form-grupo-familiar/form-grupo-familiar.component';
import { FormEmpleadorComponent } from './pages/form-empleador/form-empleador.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'solicitud-afiliacion', component: SolicitudAfiliacionPageComponent },
      { path: 'form-area-afiliaciones', component: FormAreaAfiliacionesComponent },
      { path: 'form-cotizante', component: FormCotizanteComponent },
      { path: 'form-grupo-familiar', component: FormGrupoFamiliarComponent},
      { path: 'form-empleador', component: FormEmpleadorComponent },
      { path: '**', component: Error404PageComponent  }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AfiliacionesRoutingModule { }
