import { Injectable } from '@angular/core';
import { Animal } from '../models/animal';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListanimalService {

private readonly API ='http://127.0.0.1:3333/animals';

  constructor(private http: HttpClient) { }
  list(){
    return this.http.get<Animal[]>(this.API)
  }
}
