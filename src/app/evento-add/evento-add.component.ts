import { Component, EventEmitter, Output } from '@angular/core';
import { Evento } from '../interfaces/evento';

@Component({
  selector: 'app-evento-add',
  templateUrl: './evento-add.component.html',
  styleUrls: ['./evento-add.component.css']
})
export class EventoAddComponent {
  @Output() addEvento = new EventEmitter<Evento>();

  evento!:Evento;

  newEvento: Evento = {
    title: '',
    image: '',
    date: '',
    description: '',
    price: 0,
  };

  setEvento(){
    this.addEvento.emit(this.newEvento);
    this.newEvento = {
      title: '',
      image: '',
      date: '',
      description: '',
      price: 0,
    };
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) {
      return;
    }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', (e) => {
      this.newEvento.image = reader.result as string;
    });
  }
}
