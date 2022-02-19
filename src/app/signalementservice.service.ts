import { Injectable } from '@angular/core';
import { Region } from './Model/Region';
import { Photo } from './Model/Photo';
import { Signalement } from './Model/Signalement';
import { TypeSignalement } from './Model/TypeSignalement';
import { Utilisateur } from './Model/Utilisateur';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import * as L from 'leaflet';


@Injectable({
  providedIn: 'root'
})
export class SignalementserviceService {

  constructor(private http:HttpClient){}
  Url2= 'http://localhost:8081/api/signalement';
    Url7= 'http://localhost:8081/api/signalement/id';
  Url3= 'http://localhost:8081/api/RegionDistinctParSignalement';
  Url4= 'http://localhost:8081/api/RegionProvinceParSignalement';
  Url5=  'http://localhost:8081/api/SiganelementNonAffecter';


  getAllSignalement()
  {
    return this.http.get<Signalement[]>(this.Url2);
  }

  getSignalementById(id:any, map: L.map): void
  {
    this.http.get<Signalement[]>(`${this.Url2}/${id}`).subscribe(
        (res: any) =>{
          const longitude = res.positionx;
          const latitude = res.positiony;
          const marker = L.marker([longitude,latitude]);

          marker.addTo(map);
      });
  }

  getSignalementById2(id: any)
  {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id",id);
    return this.http.get<Signalement[]>(this.Url7,{params:queryParams});
  }

  getRegionDistinct()
  {
    return this.http.get<String>(this.Url3);
  }
  getProvinceDistinct()
  {
    return this.http.get<String>(this.Url4);
  }
  getSiganelementNonAffecter(){
    return this.http.get<Signalement[]>(this.Url5);
  }
//   getSelectParProvince(nomProvince:string){
//     let queryParams = new HttpParams();
//     queryParams = queryParams.append("nom",nomProvince);
//     return this.http.get<Signalement[]>(this.Url5,{params:queryParams});
// }
//  getSelectNomRegionParProvince(nomRegion:string,nomProvince:string){
//   let queryParams = new HttpParams();
//   queryParams = queryParams.append("nomRegion",nomRegion);
//   queryParams = queryParams.append("nomProvince",nomProvince);
//   return this.http.get<Signalement[]>(this.Url6,{params:queryParams});
// }
}
