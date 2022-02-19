import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Province } from './Model/Province';
import { Region } from './Model/Region';
@Injectable({
  providedIn: 'root'
})
export class RegionserviceService {

  constructor(private http:HttpClient){}
  Url= 'http://localhost:8081/api/region/add';
  Url2= 'http://localhost:8081/api/region';
  Url3= 'http://localhost:8081/api/SupprimerRegion';
  
  creationRegion(region: Region)
  {
    return this.http.post<Region>(this.Url,region);
  }
    getAllregion()
  {
    return this.http.get<Region[]>(this.Url2);
  }
  updateRegion(id:any,region: Region){return this.http.put<Region>(`${this.Url2}/${id}`,region);}
  get(id:number) {
    return this.http.get(`${this.Url2}/${id}`);
  }

  deleteRegion(id:any){
    return this.http.delete<void>(`${this.Url3}/${id}`);
  }
}
