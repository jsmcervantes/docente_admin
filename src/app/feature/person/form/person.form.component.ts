import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person.form.component.html'
})
export class PersonFormComponent implements OnInit {

  constructor(
    private personService:PersonService,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) {}

  currentEntity:Person =
  {
    id:0,
    name:"",
    dni:"",
    enabled: true,


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
    this.personService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity =
        {
          id:0,
          name:"",
          dni:"",
           enabled: true,

        };
        this.router.navigate(['/layout/person-list']);
      }
    )
  }

  findById(id: number):void {
    this.personService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
      }
    )
  }

  deleteById(): void{
    this.personService.deleteById(this.currentEntity.id).subscribe(
      () => {
        console.log("borrando");
      }
    )
  }

}
