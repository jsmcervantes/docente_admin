import { Component, OnInit } from '@angular/core';
import { Username } from '../username';
import { UsernameService } from '../username.service';

@Component({
  selector: 'app-username-list',
  templateUrl: './username-list.component.html',
})
export class UsernameListComponent implements OnInit {

  constructor(
    private usernameService:UsernameService
  ) { }

  usernameList: Username []=[];

  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void{
    this.usernameService.findAll().subscribe(
      (response) => this.usernameList=response
    )
  }

  public findByName(term: string):void{
    if (term.length>=2){
      this.usernameService.findByName(term).subscribe(
        (response) => this.usernameList =response
      )
    }
    if (term.length===0){
      this.findAll();
    }

  }


}
