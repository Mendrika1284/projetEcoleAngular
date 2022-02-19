import { Component, OnInit } from '@angular/core';
import {Signalement} from '../Model/Signalement';
import { Router } from '@angular/router';
import {SignalementserviceService} from '../signalementservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signalement',
  templateUrl: './signalement.component.html',
  styleUrls: ['./signalement.component.css']
})
export class SignalementComponent implements OnInit {

  SignalementNonAffecter: Signalement[];

  config : any;
  totalLength : any;
  constructor(private signalemementservice: SignalementserviceService,private router: Router,private route: ActivatedRoute) { 
    this.config={
      currentPage :1,
      itemsPerPage :6,
      totalItems: 0
    }
    route.queryParams.subscribe(
      params=>this.config.currentPage = params['page'] ? params['page']:1
    )
  }
  pageChange(newPage: number){
    this.router.navigate([''],{queryParams: {page: newPage}});
  }

  
  ngOnInit(): void{

    this.SiganelementNonAffecter();
 }
  SiganelementNonAffecter():void{
    this.signalemementservice.getSiganelementNonAffecter()
    .subscribe(
      data => {
        this.SignalementNonAffecter=data;
    })
  }
  
goTo(id: number){
  this.router.navigate(['/infosignalement/'+id])
}



}

