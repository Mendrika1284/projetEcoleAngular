import { Component, OnInit } from '@angular/core';
import {SignalementaffecterService} from '../signalementaffecter.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signalementaffecter',
  templateUrl: './signalementaffecter.component.html',
  styleUrls: ['./signalementaffecter.component.css']
})
export class SignalementaffecterComponent implements OnInit {
  SignalementEncours:number;
  constructor(private signalementaffecter: SignalementaffecterService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.SignalementEncours;
  }
  getCountSignalementEncours():void{
    this.signalementaffecter.getCountSignalementEncours()
    .subscribe(
      data => {
        this.SignalementEncours=data;
    })
  }
}
