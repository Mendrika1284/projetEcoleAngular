import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  title="Acceuil";
  constructor(  private router: Router ) { }

  ngOnInit(): void {
    this.router.navigate(['accueil']);
  }

}
