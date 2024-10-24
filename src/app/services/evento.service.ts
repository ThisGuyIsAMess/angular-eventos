import { Injectable } from '@angular/core';
import { Evento } from '../interfaces/evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  eventos:Evento[] = [];

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {
    this.eventos = [
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

  getEventos(): Evento[] {
    return this.eventos;
  }

  addEvento(evento: Evento): Evento[]{
    this.eventos.push(evento);
    return this.eventos;
  }

  deleteEvento(eve: Evento): Evento[]{
    //this.eventos.splice(this.eventos.indexOf(eve),1);
    this.eventos = this.eventos.filter(e => e.title != eve.title);
    return this.eventos
  }
}
