import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tuors} from "../model/tuor/tuor.module";

@Injectable({
  providedIn: 'root'
})
export class TuorService {

  constructor(private httpClient:HttpClient) { }
  API_URL = 'http://localhost:8080/products'

  getAll(): Observable<any> {
    return this.httpClient.get(this.API_URL);
  }

  save(tuors: Tuors): Observable<any> {
    return this.httpClient.post(this.API_URL, tuors)
  }

  getById(id: any): Observable<any> {
    return this.httpClient.get(this.API_URL + '/' + id);
  }


  delete(id: number) {
    return this.httpClient.delete(this.API_URL + `/`+id)

  }

  update(tuors: any, id: any): Observable<Tuors> {
    // @ts-ignore
    return this.httpClient.put(this.API_URL + `/${id}`, tuors);
  }
}
