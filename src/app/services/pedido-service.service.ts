import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pedido } from '../model/Pedido';
import { Observable } from 'rxjs';
import { Rateio } from '../model/Rateio';

@Injectable({
  providedIn: 'root'
})
export class PedidoServiceService {

  localUrl: string;
  pipe = new DatePipe('pt-BR');
  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: false
  };

  constructor(private http: HttpClient) {
    this.localUrl = `${environment.apiUrl}/api/softexperts`;
   }

   calcularPedido(pedido: Pedido): Observable<Rateio>{
    return this.http.post<Rateio>(`${this.localUrl}/calcular-rateio`, JSON.stringify(pedido), this.httpOptions);
   }

}
