import { Component, OnInit } from '@angular/core';
import { ActorCreacionDTO } from '../actor';

@Component({
  selector: 'app-crear-actor',
  templateUrl: './crear-actor.component.html',
  styleUrls: ['./crear-actor.component.css']
})
export class CrearActorComponent {

  constructor() { }

  guardar(actor: ActorCreacionDTO) {
    console.log(actor);
  }

}
