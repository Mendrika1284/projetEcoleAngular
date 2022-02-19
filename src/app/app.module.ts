import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AccueilComponent } from './accueil/accueil.component';
import { HttpClientModule } from '@angular/common/http';
import { DeconnexionComponent } from './deconnexion/deconnexion.component';
import { AjoutregionComponent } from './ajoutregion/ajoutregion.component';
import { LoginComponent } from './login/login.component';
import { SupregionComponent } from './supregion/supregion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { ServiceService } from '../app/service.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ListeRegionComponent } from './liste-region/liste-region.component';
import { ModifRegionComponent } from './modif-region/modif-region.component';
import { SignalementComponent } from './signalement/signalement.component';
import { ListeUtilisateurComponent } from './liste-utilisateur/liste-utilisateur.component';
import { InfosUtilisateurComponent } from './infos-utilisateur/infos-utilisateur.component';
import { InfoSignalementComponent } from './info-signalement/info-signalement.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    DeconnexionComponent,
    AjoutregionComponent,
    LoginComponent,
    SupregionComponent,
    MenuComponent,
    FooterComponent,
    ListeRegionComponent,
    ModifRegionComponent,
    SignalementComponent,
    ListeUtilisateurComponent,
    InfosUtilisateurComponent,
    InfoSignalementComponent,
    StatistiqueComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    NgChartsModule,
    NgbModule

  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
