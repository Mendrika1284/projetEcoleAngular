import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo } from '../Model/Photo';
import { Region } from '../Model/Region';
import { PhotoserviceService } from '../photoservice.service';
import { RegionserviceService } from '../regionservice.service';
import { SignalementaffecterService } from '../signalementaffecter.service';
import { SignalementserviceService } from '../signalementservice.service';
import { SignalementAffecter } from '../Model/SignalementAffecter';
import { Signalement } from '../Model/Signalement';



@Component({
  selector: 'app-info-signalement',
  templateUrl: './info-signalement.component.html',
  styleUrls: ['./info-signalement.component.css']
})
export class InfoSignalementComponent implements OnInit {
  Photo: Photo[];
  Region: Region[];
  Signalement: Signalement[];
  SignalementAffecter: SignalementAffecter = new SignalementAffecter();
  submitted = false;
  constructor(private signalementService: SignalementserviceService, private signalementaffecterservice: SignalementaffecterService,private photoservice: PhotoserviceService,private regionservice: RegionserviceService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'));
    this.getPhotoSignalement();
    this.getAllRegion();
    this.getSignalementById();
  }

  getPhotoSignalement(){
    this.photoservice.getAllPhotoSignalement(this.route.snapshot.paramMap.get('id'))
    .subscribe(data=>{
      console.log(data);
      this.Photo = data;
    })
  }

  getAllRegion(){
    this.regionservice.getAllregion()
    .subscribe(data=>{
      this.Region = data;
    })
  }

  getSignalementById(){
    this.signalementService.getSignalementById2(this.route.snapshot.paramMap.get('id'))
    .subscribe(data=>{
      this.Signalement = data;
      console.log(data);
    })
  }

  affecter(): void{
    this.signalementaffecterservice.affecterSignalement(this.SignalementAffecter)
    .subscribe(data=>{
      console.log(data);
      this.SignalementAffecter = new SignalementAffecter();
    });
  }

  onSubmit(){
    this.submitted = true;
    this.affecter();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/accueil']);
  }

}
