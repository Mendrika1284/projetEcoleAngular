import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { HttpParams} from '@angular/common/http';

import { Admin } from './Model/Admin';
@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  private url2="http://localhost:8081/api/LoginAdmin";

  constructor(private http: HttpClient) { }

  signupAdmin(login:string,mdp:string){
    let params = new HttpParams();
    params = params.set('login', login);
    params = params.set('mdp', mdp);
    return this.http.post(this.url2, params);
  }
}
