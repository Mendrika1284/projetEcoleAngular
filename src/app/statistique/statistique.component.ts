import { Component, OnInit, Type } from '@angular/core';
/*import { Label, MultiDataSet, Color } from 'ng2-charts';
import { ChartType } from 'chart.js';*/
import { TypeSignalement } from '../Model/TypeSignalement';
import { StatistiqueserviceService } from '../statistiqueservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {
  ngOnInit(){}
  /* typeSignalement: TypeSignalement[];
   listeNomSignalement: string[];
  public doughnutChartLabels:string[]=[''];
  public doughnutChartData:MultiDataSet=[[22,23,24,25]];
  valeur:Array<number>=[];
  nombre:number;
  virgule:string=',';
   doughnutChartType: ChartType = 'doughnut';
  constructor(private statistiqueservice: StatistiqueserviceService,private router: Router) {
  }
  ngOnInit(){
    this.statistiqueservice.getTypeSignalement().subscribe(
      (data:string[])=>{
        this.doughnutChartLabels=data; 
        for (let i = 0; i < this.doughnutChartLabels.length; i++) {

          this.statistiqueservice.getDataTypeSignalement(this.doughnutChartLabels[i]).subscribe(
            (data)=>{
              this.nombre=data;
              this.valeur.push(this.nombre);
              console.log(data);
              this.doughnutChartData=[this.valeur];
            }

          )
          
        }
    })
  //   this.nom="Dechets";
  //  this.statistiqueservice.getDataTypeSignalement(this.nom).subscribe((data)=>{
  //   console.log(data);
  //  })
  
  }

  listeTypeSignalement(){
    this.statistiqueservice.getTypeSignalement()
    .subscribe(
     (data) => {
         this.listeNomSignalement=data;
          console.log(this.listeNomSignalement);
          // return this.listeNomSignalement;
     })
   }

  */

  
}
