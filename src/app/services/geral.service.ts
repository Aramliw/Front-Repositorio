import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeralService {

  private apiUrl = 'http://localhost:3000/'; // Substitua pela URL da sua API

  constructor(private http: HttpClient) { }

  obterDados(url:string): Observable<any> {
    return this.http.get(this.apiUrl+url);
  }

  adicionarDado(url:string, dado: any): Observable<any> {
    return this.http.post(this.apiUrl+url, dado);
  }
}
