import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilComponent} from './components/pages/accueil/accueil.component';
import {HabitatsComponent} from './components/pages/habitats/habitats.component';
import {ContactComponent} from './components/pages/contact/contact.component';
import {ProduitComponent} from './components/pages/habitats/produit/produit.component';
import {ApplyFormComponent} from './components/pages/reservations/apply-form/apply-form.component';
import {SigninComponent} from './components/pages/user-account/signin/signin.component';
import {SignupComponent} from './components/pages/user-account/signup/signup.component';
import {DeposerAnnonceComponent} from './components/pages/habitats/deposer-annonce/deposer-annonce.component';
import {EspaceClientComponent} from "./components/pages/user-account/espace-client/espace-client.component";
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import {AuthGuard} from './core/guard/auth.guard';
import {MesHabitatsComponent} from './components/pages/habitats/mes-habitats/mes-habitats.component';
import {MesReservationsComponent} from './components/pages/reservations/mes-reservations/mes-reservations/mes-reservations.component';
import {ModifierHabitatsComponent} from './components/pages/habitats/modifier-habitats/modifier-habitats/modifier-habitats.component';
import {DetailsMesHabitatsComponent} from './components/pages/habitats/details-mes-habitats/details-mes-habitats.component';

const routes: Routes = [
  {path : 'accueil', component : AccueilComponent },
  {path : 'ajouter-habitat', component : DeposerAnnonceComponent, canActivate: [AuthGuard] },
  {path : 'contact', component : ContactComponent },
  {path : 'espace-client', canActivate: [AuthGuard],
    children: [
      {path:  '', component: EspaceClientComponent},
      {path:  'mes-reservations', component: MesReservationsComponent},
      {path : 'mes-habitats',
        children: [
          {path : '', component : MesHabitatsComponent},
          {path : 'modifier-habitat/:id', component : ModifierHabitatsComponent},
          {path : 'details-habitat/:id', component : DetailsMesHabitatsComponent}
        ]
      },
    ]
  },
  {path : 'habitats', component : HabitatsComponent },
  {path : 'habitat/:id', component : ProduitComponent },
  {path : 'login', component : SigninComponent },
  {path : 'reserver', component : ApplyFormComponent, canActivate: [AuthGuard] },
  {path : 'signup', component : SignupComponent },
  {path : '', redirectTo : '/accueil', pathMatch: 'full' },
  {path : '**', component: PageNotFoundComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})
export class AppRoutingModule { }
