import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AjoutregionComponent } from './ajoutregion/ajoutregion.component';
import { AppComponent } from './app.component';
import { DeconnexionComponent } from './deconnexion/deconnexion.component';
import { LoginComponent } from './login/login.component';
import { SupregionComponent} from './supregion/supregion.component';
import { ListeRegionComponent} from './liste-region/liste-region.component';
import { ModifRegionComponent} from './modif-region/modif-region.component';
import { SignalementComponent} from './signalement/signalement.component';
import { ListeUtilisateurComponent} from './liste-utilisateur/liste-utilisateur.component';
import { InfosUtilisateurComponent } from './infos-utilisateur/infos-utilisateur.component';
import { InfoSignalementComponent } from './info-signalement/info-signalement.component';
import { StatistiqueComponent } from './statistique/statistique.component';

const routes: Routes = [
  {path:'backOffice', component: AppComponent},
  {path:'accueil', component: AccueilComponent},
  {path:'ajoutregion', component: AjoutregionComponent},
  {path:'login', component: LoginComponent},
  {path:'deconnexion', component: DeconnexionComponent},
  {path:'supregion/:id', component: SupregionComponent},
  {path:'listeRegion', component: ListeRegionComponent},
  {path:'modifRegion/:id', component: ModifRegionComponent},
  {path:'signalement', component: SignalementComponent},
  {path:'listeUtilisateur', component: ListeUtilisateurComponent},
  {path: 'infosUtilisateur',component: InfosUtilisateurComponent },
  {path:'infosignalement/:id', component: InfoSignalementComponent },
  {path:'statistique', component: StatistiqueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
