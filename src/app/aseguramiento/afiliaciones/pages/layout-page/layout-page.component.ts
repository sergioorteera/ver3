import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {

  public menuItems = [
    {label: 'Solicitud de afiliación', icon: 'label', url: './solicitud-afiliacion'}
  ]


}
