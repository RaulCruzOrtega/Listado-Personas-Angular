import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingServise } from '../LoggingService.servise';
import { PersonasService } from '../personas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  //@Output() personaCreada = new EventEmitter<Persona>();

  nombreInput = "";
  apellidoInput = "";
  dineroInput!: number;
  sexo:string = "Hombre";
  //@ViewChild('nombreRef') nombreInput!: ElementRef;
  //@ViewChild('apellidoRef') apellidoInput!: ElementRef;

  constructor(private loggingService:LoggingServise, 
    private personasService: PersonasService,
    private routeService: Router){
    this.personasService.saludar.subscribe(
      (indice: number) => alert("El indice es: " + indice)
    )
  }

  

  agregarPersona(){
    if (this.dineroInput == undefined){
      this.dineroInput = 0;
    }
    let persona = new Persona(
      this.nombreInput, 
      this.apellidoInput,
      this.dineroInput,
      this.sexo);
    this.loggingService.enviarMensajeConsola("Enviamos persona: " + persona.nombre)
    //this.personas.push(persona);
    //this.personaCreada.emit(persona);
    this.personasService.Agregarpersona(persona);
    this.nombreInput = "";
    this.apellidoInput = "";
    this.dineroInput = 0;
    this.routeService.navigate(["personas"]);
  }

  sexoseleccionado(evento: Event){
    this.sexo = (<HTMLSelectElement>evento.target).value;
  }
}
