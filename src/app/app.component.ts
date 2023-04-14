import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  titulo = 'Listado de Personas';

  /*
  personaAgregada(persona: Persona){
    this.logginService.enviarMensajeConsola("agregamos al arreglo la nueva persona:" + persona.nombre)
    //this.personas.push(persona);
    this.personasService.Agregarpersona(persona);
  }
  */
}
