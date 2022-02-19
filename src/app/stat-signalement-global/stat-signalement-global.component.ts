import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js'; 
@Component({
  selector: 'app-stat-signalement-global',
  templateUrl: './stat-signalement-global.component.html',
  styleUrls: ['./stat-signalement-global.component.css']
})
export class StatSignalementGlobalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
    var yValues = [55, 49, 44, 24, 15];
    var barColors = [
      "#b91d47",
      "#00aba9",
      "#2b5797",
      "#e8c3b9",
      "#1e7145"
    ];
    
    var chart = new Chart("chart1", {
      type: "pie",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
    });
  }

}
