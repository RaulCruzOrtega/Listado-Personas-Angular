import { EventEmitter, Injectable } from "@angular/core";
import { LoggingServise } from "./LoggingService.servise";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService{
    personas: Persona[] = [
        new Persona("Maria", "Montes de Oca", 20, "Mujer"), 
        new Persona("Laura", "Gorda", 40, "Mujer")
    ];
    
    saludar = new EventEmitter<number>();

      
    constructor(private loggingService: LoggingServise){}

    Agregarpersona(persona: Persona){
    this.loggingService.enviarMensajeConsola("agregamos persona: " + persona.nombre);
    this.personas.push(persona);
  }

  encontrarPersona(index: number){
    let persona: Persona = this.personas[index];
    return persona;
  }

  modificarPersona(index:number, persona:Persona){
    let persona_modifi = this.personas[index];
    persona_modifi.nombre = persona.nombre;
    persona_modifi.apellido = persona.apellido;
    persona_modifi.dinero = persona.dinero;
    persona_modifi.sexo = persona.sexo;
  }

  eliminarPersona(index:number){
    this.personas.splice(index,1);
  }
}