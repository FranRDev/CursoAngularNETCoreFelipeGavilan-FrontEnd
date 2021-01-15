import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorCreacionDTO, ActorDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  modelo: ActorDTO = { nombre: 'Tom Holland', fechaNacimiento: new Date(), foto: 'https://t2.gstatic.com/images?q=tbn:ANd9GcT2mdIv2oSgUO0zm7jZHboIgb1T7ligSAizsDiuDbOC94Dt8TZffj5WtNHFvoci' }

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(parametros => {
      //alert(parametros.id);
    })
  }

  guardar(actor: ActorCreacionDTO) {
    console.log(actor);
  }

}
