import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { TiposPermiso } from './tipoPermiso';

@Injectable({

  providedIn: 'root'
})
export class TiposPermisoService {
  [x: string]: any;

  constructor(
    private http:HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/tipospermiso";

  public save(tiposPermiso: TiposPermiso): Observable<TiposPermiso>{
    return this.http.post<TiposPermiso>(this.url+"/save", tiposPermiso, this.httpOptions);
  }

  public findById(id: number): Observable<TiposPermiso>{
    return this.http.get<TiposPermiso>(this.url+"/"+id, this.httpOptions);
  }

  public deleteById(id:number): Observable<TiposPermiso>{
    return this.http.delete <TiposPermiso>(this.url+"/deleteById/"+id , this.httpOptions);
  }

  public findAll(): Observable<TiposPermiso[]>{
    return this.http.get<TiposPermiso[]>(this.url+"/findAll",this.httpOptions)
  }

  public findByTiposPermiso(term: string): Observable<TiposPermiso[]>{
    return this.http.get<TiposPermiso[]>(this.url+"/findByTiposPermiso/"+term, this.httpOptions);
  }

  public findByNombre(term: string): Observable<TiposPermiso[]>{
    return this.http.get<TiposPermiso[]>(this.url+"/findByNombre/"+term, this.httpOptions);
    }

}
