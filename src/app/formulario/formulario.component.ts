import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output() personaCreada = new EventEmitter<Persona>();

  //nombreInput = "";
  //apellidoInput = "";
  @ViewChild('nombreRef') nombreInput!: ElementRef;
  @ViewChild('apellidoRef') apellidoInput!: ElementRef;

  agregarPersona(){
    let persona = new Persona(
      this.nombreInput.nativeElement.value, 
      this.apellidoInput.nativeElement.value);
    //this.personas.push(persona);
    this.personaCreada.emit(persona);
  }
}
