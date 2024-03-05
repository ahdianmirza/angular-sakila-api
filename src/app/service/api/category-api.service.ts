import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryApiService {
  private baseUrl: string = 'http://localhost:8800/api/master/';

  constructor(private _http: HttpClient) {}

  getAllCategory(): Observable<any> {
    return this._http.get(`${this.baseUrl}/category`);
  }

  addCategory(data: any): Observable<any> {
    return this._http.post(`${this.baseUrl}/category`, data);
  }

  deleteCategory(id: number): Observable<any> {
    return this._http.delete(`${this.baseUrl}/category/${id}`);
  }
}
