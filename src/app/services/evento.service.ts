import { Injectable } from '@angular/core';
import { Evento } from '../interfaces/evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  getEventos(): Evento[] {
    return [
      {
        title: 'Evento de prueba',
        image: 'assets/evento1.jpg',
        date: '2019-03-15',
        description: 'Nos lo pasaremos genial',
        price: 23.95,
      },
      {
        title: 'Evento de prueba 2',
        image: 'assets/evento2.jpg',
        date: '2019-03-21',
        description: 'Este es peor',
        price: 15.5,
      }
    ];
  }
}
