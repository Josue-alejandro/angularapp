import { Component } from '@angular/core';
import { ContentData } from './content-data';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})

export class ServicesComponent {
  servicesList: ContentData[] = [
    {
      title: 'Service 1', 
      content: 'Con nuestro servicio de reclutamiento siempre tendrás al mejor talento disponible listo. Desde una persona, hasta reclutamientos masivos para puestos permanentes.', 
      image: '../../assets/service1.jpg'
    },
    {
      title: 'Capacitación', 
      content: 'Realizamos detecciones de necesidades de capacitación basados en analíticos, desarrollamos los contenidos alineados a la normativa de la STPS y generamos los estándares de competencia relevantes para tu negocio.', 
      image: '../../assets/service1.jpg'
    },
    {
      title: 'Service 3', 
      content: 'Consectetur adipisicing elit.', 
      image: '../../assets/service1.jpg'
    },
    {
      title: 'Service 4', 
      content: 'Lorem ipsum dolor sit amet.', 
      image: '../../assets/service1.jpg'
    }
  ];
}
