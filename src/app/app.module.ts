import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { OwlModule } from 'ngx-owl-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/under-components/shared/nav/nav.component';
import { BannerComponent } from './components/under-components/blocs/banner/banner.component';
import { ParallaxComponent } from './components/under-components/blocs/parallax/parallax.component';
import { CtappsComponent } from './components/under-components/blocs/ctapps/ctapps.component';
import { NewsletterComponent } from './components/under-components/blocs/newsletter/newsletter.component';
import { ReviewsComponent } from './components/under-components/blocs/reviews/reviews.component';
import { FooterComponent } from './components/under-components/shared/footer/footer.component';
import { DestinationsFavoritesComponent } from './components/under-components/blocs/destinations-favorites/destinations-favorites.component';
import { SectionTitleComponent } from './components/under-components/blocs/section-title/section-title.component';
import { CarouselComponent } from './components/under-components/shared/carousel/carousel.component';
import { HebergementsPopulairesComponent } from './components/under-components/blocs/hebergements-populaires/hebergements-populaires.component';
import { HabitatsComponent } from './components/pages/habitats/habitats.component';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/pages/accueil/accueil.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ProduitComponent } from './components/pages/habitats/produit/produit.component';
import {ApplyFormComponent} from './components/pages/reservations/apply-form/apply-form.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { ValidateEqualModule } from 'ng-validate-equal';
import { SigninComponent } from './components/pages/user-account/signin/signin.component';
import { SignupComponent } from './components/pages/user-account/signup/signup.component';
import { DeposerAnnonceComponent } from './components/pages/habitats/deposer-annonce/deposer-annonce.component';
import { EspaceClientComponent } from './components/pages/user-account/espace-client/espace-client.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import { NgxPayPalModule } from 'ngx-paypal';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import {AppHttpInterceptorService} from './core/auth/app-http-interceptor.service';
import { MesHabitatsComponent } from './components/pages/habitats/mes-habitats/mes-habitats.component';
import {DataTablesModule} from 'angular-datatables';
import { MesReservationsComponent } from './components/pages/reservations/mes-reservations/mes-reservations/mes-reservations.component';
import { DetailsMesHabitatsComponent } from './components/pages/habitats/details-mes-habitats/details-mes-habitats.component';
import { ModifierHabitatsComponent } from './components/pages/habitats/modifier-habitats/modifier-habitats/modifier-habitats.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerComponent,
    ParallaxComponent,
    CtappsComponent,
    NewsletterComponent,
    ReviewsComponent,
    FooterComponent,
    DestinationsFavoritesComponent,
    SectionTitleComponent,
    CarouselComponent,
    HebergementsPopulairesComponent,
    AccueilComponent,
    HabitatsComponent,
    ContactComponent,
    ProduitComponent,
    ApplyFormComponent,
    SigninComponent,
    SignupComponent,
    DeposerAnnonceComponent,
    EspaceClientComponent,
    PageNotFoundComponent,
    MesHabitatsComponent,
    MesReservationsComponent,
    DetailsMesHabitatsComponent,
    ModifierHabitatsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OwlModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    FormlyBootstrapModule,
    ValidateEqualModule,
    HttpClientModule,
    AppRoutingModule,
    NgxSpinnerModule,
    NgxPayPalModule,
    DataTablesModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
