import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getClientes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/clientes`);
  }

  getProdutos(): Observable<any> {
    return this.http.get(`${this.baseUrl}/produtos`);
  }

  getCompras(): Observable<any> {
    return this.http.get(`${this.baseUrl}/compras`);
  }

  obterClienteMaisCompras(mes: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/compras/mais-compras?mes=${mes}`);
  }

  adicionarCliente(cliente: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/clientes`, cliente);
  }

  adicionarProduto(produto: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/produtos`, produto);
  }

  adicionarCompra(compra: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/compras`, compra);
  }
}

