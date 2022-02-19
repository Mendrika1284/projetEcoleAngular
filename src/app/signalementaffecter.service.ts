import { Injectable } from '@angular/core';
import { SignalementAffecter } from './Model/SignalementAffecter';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignalementaffecterService {

  constructor(private http:HttpClient) { }
   Url1= 'http://localhost:8081/api/signalementAffecter/add';
   Url2= 'http://localhost:8081/api/signalementAffecter';
  
  affecterSignalement(signalementAffecter: SignalementAffecter)
  {
    return this.http.post<SignalementAffecter>(this.Url1,signalementAffecter);
  }

  getSignalementAffecter(){
    return this.http.get<SignalementAffecter[]>(this.Url2);
  }
}
