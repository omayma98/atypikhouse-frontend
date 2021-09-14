"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProduitComponent = void 0;
var core_1 = require("@angular/core");
var ProduitComponent = /** @class */ (function () {
    function ProduitComponent(route, auth, deposerService) {
        var _this = this;
        this.route = route;
        this.auth = auth;
        this.deposerService = deposerService;
        this.customOptionsDestinations = {
            loop: true,
            margin: 30,
            autoplay: false,
            stagePadding: 5,
            URLhashListener: true,
            dots: false,
            // tslint:disable-next-line:max-line-length
            navText: ['<i class=\'fas fa-arrow-alt-circle-left text-primary\'></i>', '<i class=\'fas fa-arrow-alt-circle-right text-primary\'></i>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                940: {
                    items: 1,
                    nav: true
                }
            }
        };
        this.categoriesOptions = {
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            center: true,
            margin: 10,
            dotsSpeed: 300,
            responsive: {
                0: {
                    items: 4,
                    loop: true,
                },
                400: {
                    items: 4,
                    loop: true,
                },
                740: {
                    items: 4,
                    loop: true,
                },
                940: {
                    items: 4,
                    loop: true,
                }
            }
        };
        this.carouselOptions = {
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            dragEndSpeed: 450,
            items: 1,
        };
        this.destinationsFavorites = [
            {
                bgUrl: '/assets/images/acquitaine.png'
            },
            {
                bgUrl: '/assets/images/bretagne.png'
            },
            {
                bgUrl: '/assets/images/limousin.png'
            },
            {
                bgUrl: '/assets/images/acquitaine.png'
            }
        ];
        this.route.params.subscribe(function (params) { return _this.habitatid = params.id; });
    }
    // tslint:disable-next-line:typedef
    ProduitComponent.prototype.slideTo = function (category) {
        this.owlMac.moveByDot(category);
    };
    ProduitComponent.prototype.changeSlide = function ($event) {
        if (this.owlCat) {
            // this.category$.next($event.slides[0].id);
            this.owlCat.moveByDot(this.owlCat.dotsData.dots[$event.startPosition].id);
        }
    };
    ProduitComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.userAuthState.subscribe(function (val) {
            _this.isSignedIn = val;
        });
        this.deposerService.getOneHabitat(this.habitatid).subscribe(function (data) {
            _this.type1 = data;
            _this.Slides2 = _this.type1.habitat;
            _this.images = _this.type1.habitat.vues;
            _this.hasTelevision = _this.Slides2.hasTelevision;
            _this.hasChauffage = _this.Slides2.hasChauffage;
            _this.hasInternet = _this.Slides2.hasInternet;
            _this.hasClimatiseur = _this.Slides2.hasClimatiseur;
            console.log(_this.Slides2);
            console.log('Images' + _this.images);
        });
        console.log('Voici this.habitatid ' + this.habitatid);
    };
    __decorate([
        core_1.ViewChild('owlMac')
    ], ProduitComponent.prototype, "owlMac");
    __decorate([
        core_1.ViewChild('owlCat')
    ], ProduitComponent.prototype, "owlCat");
    ProduitComponent = __decorate([
        core_1.Component({
            selector: 'app-produit',
            templateUrl: './produit.component.html',
            styleUrls: ['./produit.component.scss']
        })
    ], ProduitComponent);
    return ProduitComponent;
}());
exports.ProduitComponent = ProduitComponent;
//# sourceMappingURL=produit.component.js.map