import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Admin} from '../Model/Admin';
import {AdminserviceService} from '../adminservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Admin: Admin[];
  admin: Admin = new Admin();
  message:string;
  constructor(private adminservice: AdminserviceService,private router: Router) { }

  ngOnInit(): void{
 }
   logincontrole()
   {
    this.adminservice.signupAdmin(this.admin.login,this.admin.mdp)
    .subscribe(
      data => {
        console.log(data);
        if(data==true){
          this.router.navigate(['/accueil']);
        }
        else{
          this.router.navigate(['/login']);
          this.message="Erreur";
        }
      })
    }
   onSubmit() {
    this.logincontrole();
  }
}
