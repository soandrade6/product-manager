import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private myappUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myappUrl = 'http://localhost:3000/';
    this.myApiUrl = 'products/';
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.myappUrl + this.myApiUrl);
  }

  deleteProdcut(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myappUrl}${this.myApiUrl}${id}`);
  }

  saveProduct(product: Product): Observable<void> {
    return this.http.post<void>(`${this.myappUrl}${this.myApiUrl}`, product);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.myappUrl}${this.myApiUrl}${id}`);
  }

  updateProduct(id: number, product:Product): Observable<void> {
    return this.http.put<void>(`${this.myappUrl}${this.myApiUrl}${id}`, product);
  }
}
