import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PecaService {
  private baseUrl = 'http://localhost:8080/api/pecas'
  private AlternativeUrl = 'http://localhost:8080/api/carros'

  constructor(private http: HttpClient) {}

  getPecas(page: number, size: number): Observable<any> {
    const requestBody = { page, size };
    return this.http.post(`${this.baseUrl}`, requestBody);
  }

  deletePeca(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  editPeca(id: number, peca: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, peca);
  }

  getPecaById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  cadastrarPeca(peca: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/salvar`, peca);
  }
}
