import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Rol } from './roles';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  constructor(private http: HttpClient) {}
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private url: string = 'http://localhost:8080/api/rol';

  public save(rol: Rol): Observable<Rol> {
    return this.http.post<Rol>(`${this.url}/save`, rol, this.httpOptions);
  }

  public findById(id: number): Observable<Rol> {
    return this.http.get<Rol>(`${this.url}/${id}`, this.httpOptions);
  }

  /**
   * findByName
   */
  public findByName(term: string): Observable<Rol[]> {
    return this.http.get<Rol[]>(
      `${this.url}/findByName/${term}`,
      this.httpOptions
    );
  }

  public findAll(): Observable<Rol[]> {
    return this.http.get<Rol[]>(`${this.url}/findAll`, this.httpOptions);
  }

  public deleteById(id: number): Observable<Rol> {
    return this.http.delete<Rol>(
      `${this.url}/deleteById/${id}`,
      this.httpOptions
    );
  }
}
