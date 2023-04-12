import { Component } from '@angular/core';
import { Persona } from './persona.model';
import { LoggingServise } from './LoggingService.servise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Personas';
  personas: Persona[] = [
    new Persona("Maria", "Montes de Oca"), 
    new Persona("Laura", "Gorda")]
  
  constructor(private logginService: LoggingServise){}
  
  personaAgregada(persona: Persona){
    this.logginService.enviarMensajeConsola("agregamos al arreglo la nueva persona:" + persona.nombre)
    this.personas.push(persona);
  }
}
