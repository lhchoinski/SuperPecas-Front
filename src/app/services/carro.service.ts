import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CarroService {
  private baseUrl = 'http://localhost:8080/api/carros';

  constructor(private http: HttpClient) {
  }

  getCarros(page: number, size: number): Observable<any> {
    const requestBody = {page, size};
    return this.http.post(`${this.baseUrl}`, requestBody);
  }

  getAllCarros(): Observable<any> {

    return this.http.get(`${this.baseUrl}/listartodos`);
  }

  getCarrosPorNome(nome: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/nome?nome=${encodeURIComponent(nome)}`)
      .pipe(
        map((response:[]) => response.map(item => item['nome']))
      )
  }

  deleteCarro(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  editCarro(id: number, carro: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, carro);
  }

  getCarroById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  cadastrarCarro(carro: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/salvar`, carro);
  }
}
