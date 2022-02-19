import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Utilisateur } from './Model/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurserviceService {
  constructor(private http:HttpClient){}
  Url= 'http://localhost:8081/api/user';

  getAllUser()
  {
    return this.http.get<Utilisateur[]>(this.Url);
  }
}
