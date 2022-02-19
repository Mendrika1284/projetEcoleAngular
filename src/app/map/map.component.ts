import { Component, AfterViewInit } from '@angular/core';
import * as mapUtil from 'leaflet';
import {SignalementserviceService} from '../signalementservice.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map;

  private initMap(): void {
    this.map = mapUtil.map('map', {
      center: [ -18.90457, 47.4980  ],
      zoom: 6
    });

    const tiles = mapUtil.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  constructor(private signalementserviceService: SignalementserviceService,private route: ActivatedRoute) { }

  ngAfterViewInit(): void {
    this.initMap();
    this.signalementserviceService.getSignalementById(this.route.snapshot.paramMap.get('id'), this.map);
  }

}
