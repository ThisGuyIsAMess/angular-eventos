import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Evento } from '../interfaces/evento'

@Component({
  selector: 'app-evento-item',
  templateUrl: './evento-item.component.html',
  styleUrls: ['./evento-item.component.css']
})
export class EventoItemComponent {
  @Input() eve!:Evento;
  @Output() delete = new EventEmitter<null>();

  deleteEvento(){
    this.delete.emit();
  }
}
