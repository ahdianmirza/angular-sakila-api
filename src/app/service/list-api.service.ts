import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
}