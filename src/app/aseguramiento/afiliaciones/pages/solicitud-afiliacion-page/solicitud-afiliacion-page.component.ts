import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, NonNullableFormBuilder } from '@angular/forms';


@Component({
  selector: 'app-solicitud-afiliacion-page',
  templateUrl: './solicitud-afiliacion-page.component.html',
  styleUrls: ['./solicitud-afiliacion-page.component.css']
})
export class SolicitudAfiliacionPageComponent{

  public personaForm = new FormGroup({
    id:              new FormControl<number>(0),
    primerNombre:    new FormControl<string>(''),
    segundoNombre:   new FormControl<string>(''),
    primerApellido:  new FormControl<string>(''),
    segundoApellido: new FormControl<string>(''),
    tipoRH:          new FormControl<string>(''),
    tipoSangre:      new FormControl<string>(''),
  })

}
