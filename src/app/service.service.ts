import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Province } from './Model/Province';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  
  constructor(private http:HttpClient){}
  Url= 'http://localhost:8081/api/province';
  getAll()
  {
    return this.http.get<Province[]>(this.Url);
  }
}
