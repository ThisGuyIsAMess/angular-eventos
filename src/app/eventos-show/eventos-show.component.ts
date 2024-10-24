import { Component } from '@angular/core';
import { Evento } from '../interfaces/evento';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-eventos-show',
  templateUrl: './eventos-show.component.html',
  styleUrls: ['./eventos-show.component.css'],
})
export class EventosShowComponent {
  search = '';
  filterDate = '';
  filterPrice = '';
  eventos:Evento[] = [];

  constructor(private eventService:EventoService){
    this.eventos = eventService.getEventos();
  }

  orderDate() {
    this.eventos = this.eventos.sort(
      (a: Evento, b: Evento) => Date.parse(b.date) - Date.parse(a.date)
    );
  }

  orderPrice() {
    this.eventos = this.eventos.sort(
      (a: Evento, b: Evento) => b.price - a.price
    );
  }

  addEvento(evento: Evento){
    this.eventos = this.eventService.addEvento(evento);
  }

  deleteEvento(eve:Evento){
    this.eventos = this.eventService.deleteEvento(eve);
  }
}
