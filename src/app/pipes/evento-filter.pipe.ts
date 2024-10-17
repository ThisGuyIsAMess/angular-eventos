import { Pipe, PipeTransform } from '@angular/core';
import { Evento } from '../interfaces/evento';

@Pipe({
  name: 'eventoFilter'
})
export class EventoFilterPipe implements PipeTransform {
  transform(eventos: Evento[], filterBy: string): Evento[] {
    const filter = filterBy ? filterBy.toLowerCase():null;
    if(filter){
      return eventos.filter(even => even.title.toLocaleLowerCase().includes(filter))
    }
    return eventos;
  }
}