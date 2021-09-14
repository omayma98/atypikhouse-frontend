"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var core_1 = require("@angular/core");
var ngx_owl_carousel_1 = require("ngx-owl-carousel");
var ngx_owl_carousel_o_1 = require("ngx-owl-carousel-o");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var auth_interceptor_1 = require("../app/services/auth.interceptor");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var nav_component_1 = require("./nav/nav.component");
var banner_component_1 = require("./banner/banner.component");
var parallax_component_1 = require("./parallax/parallax.component");
var ctapps_component_1 = require("./ctapps/ctapps.component");
var newsletter_component_1 = require("./newsletter/newsletter.component");
var reviews_component_1 = require("./reviews/reviews.component");
var footer_component_1 = require("./footer/footer.component");
var destinations_favorites_component_1 = require("./destinations-favorites/destinations-favorites.component");
var section_title_component_1 = require("./section-title/section-title.component");
var carousel_component_1 = require("./sous-components/carousel/carousel.component");
var hebergements_populaires_component_1 = require("./hebergements-populaires/hebergements-populaires.component");
var habitats_component_1 = require("./habitats/habitats.component");
var accueil_component_1 = require("./accueil/accueil.component");
var contact_component_1 = require("./contact/contact.component");
var produit_component_1 = require("./produit/produit.component");
var apply_form_component_1 = require("./apply-form/apply-form.component");
var core_2 = require("@ngx-formly/core");
var bootstrap_1 = require("@ngx-formly/bootstrap");
var ng_validate_equal_1 = require("ng-validate-equal");
var signin_component_1 = require("./signin/signin.component");
var signup_component_1 = require("./signup/signup.component");
var deposer_annonce_component_1 = require("./deposer-annonce/deposer-annonce.component");
var espace_client_component_1 = require("./espace-client/espace-client.component");
var ngx_spinner_1 = require("ngx-spinner");
var ngx_paypal_1 = require("ngx-paypal");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                nav_component_1.NavComponent,
                banner_component_1.BannerComponent,
                parallax_component_1.ParallaxComponent,
                ctapps_component_1.CtappsComponent,
                newsletter_component_1.NewsletterComponent,
                reviews_component_1.ReviewsComponent,
                footer_component_1.FooterComponent,
                destinations_favorites_component_1.DestinationsFavoritesComponent,
                section_title_component_1.SectionTitleComponent,
                carousel_component_1.CarouselComponent,
                hebergements_populaires_component_1.HebergementsPopulairesComponent,
                accueil_component_1.AccueilComponent,
                habitats_component_1.HabitatsComponent,
                contact_component_1.ContactComponent,
                produit_component_1.ProduitComponent,
                apply_form_component_1.ApplyFormComponent,
                signin_component_1.SigninComponent,
                signup_component_1.SignupComponent,
                deposer_annonce_component_1.DeposerAnnonceComponent,
                espace_client_component_1.EspaceClientComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                ngx_owl_carousel_1.OwlModule,
                ngx_owl_carousel_o_1.CarouselModule,
                forms_1.FormsModule,
                forms_2.ReactiveFormsModule,
                core_2.FormlyModule.forRoot({ extras: { lazyRender: true } }),
                bootstrap_1.FormlyBootstrapModule,
                ng_validate_equal_1.ValidateEqualModule,
                http_1.HttpClientModule,
                app_routing_module_1.AppRoutingModule,
                ngx_spinner_1.NgxSpinnerModule,
                ngx_paypal_1.NgxPayPalModule,
            ],
            providers: [
                { provide: http_1.HTTP_INTERCEPTORS,
                    useClass: auth_interceptor_1.AuthInterceptor,
                    multi: true },
            ],
            bootstrap: [app_component_1.AppComponent],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map