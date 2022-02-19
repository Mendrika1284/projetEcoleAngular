import { Component, OnInit } from '@angular/core';
import {Region} from '../Model/Region';
import {RegionserviceService} from '../regionservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-region',
  templateUrl: './liste-region.component.html',
  styleUrls: ['./liste-region.component.css']
})
export class ListeRegionComponent implements OnInit {
  Region: Region[];
  photoservice: any;
  constructor(private regionservice: RegionserviceService,private router: Router) { }

  
 ngOnInit(): void{
  this.listRegion();

}

listRegion(): void{
  this.regionservice.getAllregion()
    .subscribe(
      data => {
        this.Region=data;
      })
 }
}
