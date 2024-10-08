import { Component } from '@angular/core';
import { Evento } from '../interfaces/evento';

@Component({
  selector: 'app-eventos-show',
  templateUrl: './eventos-show.component.html',
  styleUrls: ['./eventos-show.component.css']
})
export class EventosShowComponent {
  search = '';
  filterDate = '';
  filterPrice = '';

  orderDate(){
    this.eventos = this.eventos.sort((a:Evento,b:Evento) => Date.parse(b.date) - Date.parse(a.date))
  }

  orderPrice(){
    this.eventos = this.eventos.sort((a:Evento,b:Evento) => b.price - a.price)
  }

  eventos: Evento[]=[{
    title: "Evento de prueba",
    image: "assets/evento1.jpg",
    date: "2019-03-15",
    description: "Nos lo pasaremos genial",
    price: 23.95
  },{
      title: "Evento de prueba 2",
      image: "assets/evento2.jpg",
      date: "2019-03-21",
      description: "Este es peor",
      price: 15.50
  }];
}
