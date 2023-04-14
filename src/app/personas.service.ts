import { Injectable } from "@angular/core";
import { LoggingServise } from "./LoggingService.servise";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService{
    personas: Persona[] = [
        new Persona("Maria", "Montes de Oca"), 
        new Persona("Laura", "Gorda")]
    
    constructor(private loggingService: LoggingServise){}

    Agregarpersona(persona: Persona){
    this.loggingService.enviarMensajeConsola("agregamos persona: " + persona.nombre);
    this.personas.push(persona);
  }
}