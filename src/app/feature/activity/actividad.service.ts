import { Injectable } from '@angular/core';
import { Actividad } from './actividad';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/actividad";

  public save(actividad: Actividad): Observable<Actividad>{
    return this.http.post<Actividad>(this.url+"/save", actividad, this.httpOptions);
  }

  public findById(id: number): Observable<Actividad>{
    return this.http.get<Actividad>(this.url+"/"+id, this.httpOptions);
  }

  public deleteById(id: number): Observable<Actividad>{
    return this.http.delete<Actividad>(this.url+"/deleteById/"+id, this.httpOptions);
  }
  
  public findAll(): Observable<Actividad[]>{
    return this.http.get<Actividad[]>(this.url+"/findAll", this.httpOptions);
  }

  public findByName(term: string): Observable<Actividad[]>{
    return this.http.get<Actividad[]>(this.url+"/findByName/"+term, this.httpOptions)
  } 

}
