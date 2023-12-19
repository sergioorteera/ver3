import { Component } from '@angular/core';

@Component({
  selector: 'afiliaciones-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.css']
})
export class MenuFormComponent {

  public menuItems = [
    {label: 'Datos del área de afiliaciones', icon:'label', url: './form-area-afiliaciones' },
    {label: 'Datos del cotizante', icon:'label', url: './form-cotizante' },
    {label: 'Datos de beneficiarios', icon:'label', url: './form-grupo-familiar' },
    {label: 'Datos del empleador', icon:'label', url: './form-empleador' },
  ]

}
