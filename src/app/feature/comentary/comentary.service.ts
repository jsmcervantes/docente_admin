import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentary } from './comentary';

@Injectable({
  providedIn: 'root'
})
export class ComentaryService {
  constructor(
    private http:HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/comentary";

  public findById(id: number): Observable<Comentary>{
    return this.http.get<Comentary>(this.url+"/findById/"+id, this.httpOptions);
  }


  public findAll(): Observable<Comentary[]>{
    return this.http.get<Comentary[]>(this.url+"/findAll", this.httpOptions);
  }

  public findByName(term: string): Observable<Comentary[]>{
    return this.http.get<Comentary[]>(this.url+"/findByName/"+term, this.httpOptions);
  }
}
