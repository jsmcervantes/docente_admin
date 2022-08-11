import { Injectable } from '@angular/core';
import { Permission } from './permission';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json" })
  }

  private url: string = "http://localhost:8080/api/permission";

  public save(permission: Permission): Observable<Permission>{
    return this.http.post<Permission>(this.url+"/save", permission, this.httpOptions);
  }
  public findById(id: number): Observable<Permission>{
    return this.http.get<Permission>(this.url+"/"+id,this.httpOptions);
  }
  public deleteById(id: number): Observable<Permission>{
    return this.http.delete<Permission>(this.url+"/deleteById/"+id,this.httpOptions);
  }

  public findAll(): Observable<Permission[]>{
    return this.http.get<Permission[]>(this.url+"/findAll",this.httpOptions)
  }

  public findByUsuario(term: string): Observable<Permission[]>{
    return this.http.get<Permission[]>(this.url+"/findByUsuario/"+term, this.httpOptions);
  }

  public findByDescription(term:string): Observable<Permission[]>{
    return this.http.get<Permission[]>(this.url+"/findByDescription/"+term,this.httpOptions)
  }


}
