import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  logoUrl:string= '../../assets/logo.png'
  title:string= 'Soluciones integrales de talento para puestos permanentes y Servicios Especializados para diferentes industrias.'
  subtitle:string= 'Contamos con el Registro de Prestadoras de Servicios Especializados u Obras Especializadas (REPSE).'
}
