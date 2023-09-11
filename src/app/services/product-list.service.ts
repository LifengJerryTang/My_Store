import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/product";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  private apiURL: string = 'http://localhost:4200/assets/data.json';
  constructor(private http: HttpClient) {

  }

  get products(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURL);
  }

}
