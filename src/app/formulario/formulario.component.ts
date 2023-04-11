import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output() personaCreada = new EventEmitter<Persona>();

  nombreInput = "";
  apellidoInput = "";

  agregarPersona(){
    let persona = new Persona(this.nombreInput, this.apellidoInput);
    //this.personas.push(persona);
    this.personaCreada.emit(persona);
  }
}
