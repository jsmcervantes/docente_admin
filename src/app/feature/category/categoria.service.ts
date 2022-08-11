import { Injectable } from '@angular/core';
import { Categoria } from './categoria';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/categoria";

  public save(categoria: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>(this.url+"/save", categoria, this.httpOptions);
  }

  public findById(id: number): Observable<Categoria>{
    return this.http.get<Categoria>(this.url+"/"+id, this.httpOptions);
  }

  public deleteById(id: number): Observable<Categoria>{
    return this.http.delete<Categoria>(this.url+"/deleteById/"+id, this.httpOptions);
  }

  public findAll():Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.url+"/findAll", this.httpOptions);
  }

  public findByNombre(term: String): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.url+"/findByNombre/"+term, this.httpOptions)
  }
}
