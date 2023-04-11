import { Component, EventEmitter, Output } from '@angular/core';
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

  agregarPersona(nombreInput: HTMLInputElement, apellidoInput: HTMLInputElement){
    let persona = new Persona(nombreInput.value, apellidoInput.value);
    //this.personas.push(persona);
    this.personaCreada.emit(persona);
  }
}
