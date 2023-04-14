import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { LoggingServise } from './LoggingService.servise';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';
  personas: Persona[] = [];
  
  constructor(private logginService: LoggingServise, private personasService: PersonasService){}
  
  ngOnInit():void{
    this.personas = this.personasService.personas;
  }

  /*
  personaAgregada(persona: Persona){
    this.logginService.enviarMensajeConsola("agregamos al arreglo la nueva persona:" + persona.nombre)
    //this.personas.push(persona);
    this.personasService.Agregarpersona(persona);
  }
  */
}
