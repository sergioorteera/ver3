import { Component } from '@angular/core';


@Component({
  selector: 'afiliaciones-form-area-afiliaciones',
  templateUrl: './form-area-afiliaciones.component.html',
  styleUrls: ['./form-area-afiliaciones.component.css']
})
export class FormAreaAfiliacionesComponent {

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

}
