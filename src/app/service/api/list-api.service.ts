import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ActorModel } from '../../models/actor.model';

@Injectable({
  providedIn: 'root',
})
export class ListApiService {
  private baseUrl = 'http://localhost:8800/api/master/';
  constructor(private http: HttpClient) {}

  getAllFilms(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}film`);
  }

  getAllActors(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}actor`);
  }

  addActor(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}actor`, data);
  }

  getById = (id: number) =>
    this.http.get<ActorModel>(`${this.baseUrl}actor/${id}`);

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}actor/${id}`);
  }

  editActor(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}actor/${id}`, data);
  }
}