import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Region } from './Model/Region';
import { Photo } from './Model/Photo';
import { Signalement } from './Model/Signalement';
import { TypeSignalement } from './Model/TypeSignalement';
import { Utilisateur } from './Model/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class PhotoserviceService {

  constructor(private http:HttpClient){}
  Url2= 'http://localhost:8081/api/photo';
  Url3= 'http://localhost:8081/api/photoo';

  getAllPhoto()
  {
    return this.http.get<Photo[]>(this.Url2);
  }
  getAllPhotoSignalement(id:any){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id",id);
    return this.http.get<Photo[]>(this.Url3, {params:queryParams});
  }
}
