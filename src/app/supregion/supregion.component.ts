import { Component, OnInit } from '@angular/core';
import {RegionserviceService} from '../regionservice.service';
import {PhotoserviceService} from '../photoservice.service';
import {SignalementserviceService} from '../signalementservice.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-supregion',
  templateUrl: './supregion.component.html',
  styleUrls: ['./supregion.component.css']
})
export class SupregionComponent implements OnInit {

  constructor(private regionservice: RegionserviceService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.deleteRegion();
    
  }
    deleteRegion() {
      this.regionservice.deleteRegion(this.route.snapshot.paramMap.get('id'))
      .subscribe(data => {
        this.gotoList()
        //console.log(data);
      })

  }
  gotoList() {
    this.router.navigate(['/listeRegion']);
  }
}
