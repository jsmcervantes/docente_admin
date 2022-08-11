import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comentary } from '../../comentary/comentary';
import { ComentaryService } from '../../comentary/comentary.service';
import { Registro } from '../registry';
import { RegistroService } from '../registry.service';

@Component({
  selector: 'app-registro-form',
  templateUrl: './registry.form.component.html'
})
export class RegistroFormComponent implements OnInit {

  constructor(
    private registroService: RegistroService,
    private comentaryService: ComentaryService,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) { }

  currentEntity: Registro =
  {
    registroId: 0,
    usuario: "",
    comentario: "",
    created: new Date(),
    activity: 0,
    enabled: true,
    usernameId:0,
    comentaries: []

  };

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        if (params.get("id")){
          this.findById(parseInt(params.get("id")!));
        }
      }
    )
  }

  save():void {
    console.table(this.currentEntity);
    this.registroService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity =
        {
          registroId: 0,
          usuario: "",
          comentario: "",
          created: new Date(),
          activity: 0,
          enabled: true,
          usernameId:0,
          comentaries: []

        };
        this.router.navigate(['/layout/registro-list']);
      }
    )
  }

  findById(id: number):void {
    this.registroService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
        this.currentEntity.comentaries.forEach(
          (auth) => {
            this.comentaryService.findById(auth.id).subscribe(
              (item) => auth.name = item.name
            )
          }
        )
      }
    )
  }

  deleteById():void{
    this.registroService.deleteById(this.currentEntity.registroId).subscribe(
      () => {
        console.log("Borrado");
        //redireccionar ....
      }
    )
  }

  removeComentary(id: number):void {

    this.currentEntity.comentaries =
    this.currentEntity.comentaries.filter(
      (item) => item.id != id
    );
  }

  addComentaries(comentary: Comentary){
    this.currentEntity.comentaries.push(comentary);
  }


}
