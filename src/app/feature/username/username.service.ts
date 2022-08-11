import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Username } from './username';


@Injectable({

  providedIn: 'root'
})
export class UsernameService {

  constructor(
    private http:HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/username";

  public save(username: Username): Observable<Username>{
    return this.http.post<Username>(this.url+"/save", username, this.httpOptions);
  }

  public findById(id: number): Observable<Username>{
    return this.http.get<Username>(this.url+"/"+id, this.httpOptions);
  }

  public deleteById(id:number): Observable<Username>{
    return this.http.delete <Username>(this.url+"/deleteById/"+id , this.httpOptions);
  }

  public findAll(): Observable<Username[]>{
    return this.http.get<Username[]>(this.url+"/findAll",this.httpOptions);
  }

  public findByName (term: string): Observable<Username[]>{
    return this.http.get<Username []> (this.url+"/findByName/"+term, this.httpOptions)
  }


}
