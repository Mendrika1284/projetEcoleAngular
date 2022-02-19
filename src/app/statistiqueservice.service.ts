import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { TypeSignalement } from './Model/TypeSignalement';
import { HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueserviceService {

  constructor(private http:HttpClient){}
  Url= 'http://localhost:8081/api/getTypeSignalement';
  Url2= 'http://localhost:8081/api/statistiqueGlobal';
  getTypeSignalement()
  {
    return this.http.get<string[]>(this.Url);
  }
  getDataTypeSignalement(nom:string){
    let params = new HttpParams();
    params = params.set('nom', nom);
    return this.http.post<number>(this.Url2,params);
  }
}
