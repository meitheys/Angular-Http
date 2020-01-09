import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fornecedor } from './fornecedor/fornecedor';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  private url = 'http://localhost:8080/fornecedores'

  constructor(private http: HttpClient) { }

  //Doing Post of the Usuary
  createFornecedor(fornecedor: Object): Observable<Object>{
    return this.http.post(`${this.url+'/save'}`, fornecedor);
  }

  //Getting the usuary
  getFornecedor(id: number): Observable<any>{
   return this.http.get(`${this.url+'/findById'}/${id}`);
  }

   getFornecedorList(): Observable<Fornecedor[]> {
     return this.http.get<Fornecedor[]>(`${this.url+'/findFornecedor'}`);
   }

}
