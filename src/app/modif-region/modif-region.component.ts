import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Province} from '../Model/Province';
import {ServiceService} from '../service.service';
import {Region} from '../Model/Region';
import {RegionserviceService} from '../regionservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modif-region',
  templateUrl: './modif-region.component.html',
  styleUrls: ['./modif-region.component.css']
})
export class ModifRegionComponent implements OnInit {
  Province: Province[];
  ProvinceId: any;
  Region: any = new Region();
  submitted = false;
  constructor(private service: ServiceService,private regionservice: RegionserviceService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listProvince();
  }
  listProvince(): void{
    this.service.getAll()
      .subscribe(
        data => {
          this.Province=data;
        })
   }
   updateRegion() {
      this.regionservice.updateRegion(this.route.snapshot.paramMap.get('id'),this.Region)
      .subscribe(data => {
        console.log(this.getRegion(this.route.snapshot.paramMap.get('id')))
        this.Region = new Region();
      })
  }


  getRegion(id):any {
    this.regionservice.get(id)
      .subscribe(
        data => {
          this.Region = data;
          return Region;
        },
        error => {
          console.log(error);
        });
  }

  onSubmit() {
    this.submitted = true;
    this.updateRegion();
    this.gotoList();
  }
  gotoList() {
    this.router.navigate(['/accueil']);
  }
}
