import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Region } from './Model/Region';
import { Photo } from './Model/Photo';
import { Signalement } from './Model/Signalement';
import { TypeSignalement } from './Model/TypeSignalement';
import { Utilisateur } from './Model/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class TypeserviceService {

  constructor(private http:HttpClient){}
  Url2= 'http://localhost:8081/api/typeSignalement';

  getAllTypeSignalement()
  {
    return this.http.get<TypeSignalement[]>(this.Url2);
  }
}
