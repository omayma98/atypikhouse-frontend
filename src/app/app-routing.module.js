"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var accueil_component_1 = require("./accueil/accueil.component");
var habitats_component_1 = require("./habitats/habitats.component");
var contact_component_1 = require("./contact/contact.component");
var produit_component_1 = require("./produit/produit.component");
var apply_form_component_1 = require("./apply-form/apply-form.component");
var signin_component_1 = require("./signin/signin.component");
var signup_component_1 = require("./signup/signup.component");
var deposer_annonce_component_1 = require("./deposer-annonce/deposer-annonce.component");
var espace_client_component_1 = require("./espace-client/espace-client.component");
var auth_guard_1 = require("./services/auth.guard");
var routes = [
    { path: '', component: accueil_component_1.AccueilComponent },
    { path: 'accueil', component: accueil_component_1.AccueilComponent },
    { path: 'ajouter-habitat', component: deposer_annonce_component_1.DeposerAnnonceComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'espace-client', component: espace_client_component_1.EspaceClientComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'habitats', component: habitats_component_1.HabitatsComponent },
    { path: 'habitat/:id', component: produit_component_1.ProduitComponent },
    { path: 'login', component: signin_component_1.SigninComponent },
    { path: 'reserver', component: apply_form_component_1.ApplyFormComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'signup', component: signup_component_1.SignupComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule],
            providers: [
                auth_guard_1.AuthGuard
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map