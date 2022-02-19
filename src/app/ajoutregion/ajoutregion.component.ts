import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Province} from '../Model/Province';
import {ServiceService} from '../service.service';
import {Region} from '../Model/Region';
import {RegionserviceService} from '../regionservice.service';


@Component({
  selector: 'app-ajoutregion',
  templateUrl: './ajoutregion.component.html',
  styleUrls: ['./ajoutregion.component.css']
})
export class AjoutregionComponent implements OnInit {
  Province: Province[];
  ProvinceId: any;
  Region: Region = new Region();
  submitted = false;

  constructor(private service: ServiceService,private regionservice: RegionserviceService,private router: Router) {}

 ngOnInit(): void{
    this.listProvince();
 }

 listProvince(): void{
    this.service.getAll()
      .subscribe(
        data => {
          this.Province=data;
        })
   }
   onDisplayCategory() {
    console.log("change works");
    console.log(this.ProvinceId)

  }
   //  listRegion(): void{
   //  this.regionservice.getAllregion()
   //    .subscribe(
   //      data => {
   //        this.Region=data;
   //      })
   // }
  save(): void {
    this.regionservice.creationRegion(this.Region)
    .subscribe(data => {
      console.log(data)
      this.Region = new Region();
    })
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/accueil']);
  }

}
