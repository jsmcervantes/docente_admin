import { Injectable } from '@angular/core';
import { DiaFestivo } from './holiday';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiaFestivoService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/diaFestivo";

  public save(diaFestivo: DiaFestivo): Observable<DiaFestivo>{
    return this.http.post<DiaFestivo>(this.url+"/save", diaFestivo, this.httpOptions);
  }

  public findById(id: number): Observable<DiaFestivo>{
    return this.http.get<DiaFestivo>(this.url+"/"+id, this.httpOptions);
  }

  public deleteById(id: number): Observable<DiaFestivo>{
    return this.http.post<DiaFestivo>(this.url+"/update/"+id, this.httpOptions);
  }

  public findAll(): Observable<DiaFestivo[]>{
    return this.http.get<DiaFestivo[]>(this.url+"/findAll", this.httpOptions);
  }

  public findByName(term: string): Observable<DiaFestivo[]>{
    return this.http.get<DiaFestivo[]>(this.url+"/findByName/"+term, this.httpOptions)
  }

}
