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

  addEvento(evento: Evento){
    this.eventos.push(evento);
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

  deleteEvento(eve:Evento){
    this.eventos.splice(this.eventos.indexOf(eve),1);
    //Work on the filtered deletes
    this.search = '';
  }
}
