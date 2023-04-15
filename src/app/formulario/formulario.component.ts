import { Component, ElementRef, EventEmitter, Output, ViewChild, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingServise } from '../LoggingService.servise';
import { PersonasService } from '../personas.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  index!: number;
  modoEdicion!:number;
  //@ViewChild('nombreRef') nombreInput!: ElementRef;
  //@ViewChild('apellidoRef') apellidoInput!: ElementRef;

  constructor(private loggingService:LoggingServise, 
    private personasService: PersonasService,
    private routeService: Router,
    private route: ActivatedRoute){
    this.personasService.saludar.subscribe(
      (indice: number) => alert("El indice es: " + indice)
    )
  }

  ngOnInit(){
    this.index = this.route.snapshot.params["id"];
    this.modoEdicion=parseInt(this.route.snapshot.params["modoEdicion"]);
    if(this.modoEdicion != null && this.modoEdicion == 1){
      let persona = this.personasService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
      this.dineroInput = persona.dinero
    }
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
    if(this.modoEdicion != null && this.modoEdicion == 1){
      this.personasService.modificarPersona(this.index, persona)
    } else {
      this.personasService.Agregarpersona(persona);
    }
    this.nombreInput = "";
    this.apellidoInput = "";
    this.dineroInput = 0;

    this.routeService.navigate(["personas"]);
  }

  eliminarPersona(){
    if(this.index != null){
      this.personasService.eliminarPersona(this.index);
    }
    this.routeService.navigate(["personas"]);
  }

  sexoseleccionado(evento: Event){
    this.sexo = (<HTMLSelectElement>evento.target).value;
  }
}
