import { Component } from '@angular/core';
import { Router } from '@angular/router';
 
import { Persona } from '../persona.model';
import { LoggingServise } from '../LoggingService.servise';
import { PersonasService } from '../personas.service';


@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {

  personas: Persona[] = [];
  
  constructor(private logginService: LoggingServise, 
              private personasService: PersonasService,
              private router: Router){}
  
  ngOnInit():void{
    this.personas = this.personasService.personas;
  }

  agregar(){
    this.router.navigate(["personas/agregar"])
  }


}