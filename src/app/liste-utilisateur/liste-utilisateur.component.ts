import { Component, OnInit } from '@angular/core';
import {UtilisateurserviceService}  from '../utilisateurservice.service';
import { Router } from '@angular/router';
import { Utilisateur } from '../Model/Utilisateur';
@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.component.html',
  styleUrls: ['./liste-utilisateur.component.css']
})
export class ListeUtilisateurComponent implements OnInit {
  Utilisateur: Utilisateur[];
  constructor(private utilisateurservice: UtilisateurserviceService,private router: Router) { }
  
  ngOnInit(): void {
    this.listUtilisateur()
  }
  listUtilisateur(): void{
    this.utilisateurservice.getAllUser()
      .subscribe(
        data => {
          this.Utilisateur= data;
          console.log(data)
        })
   }
}
