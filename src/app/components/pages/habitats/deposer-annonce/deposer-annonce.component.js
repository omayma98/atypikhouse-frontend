"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DeposerAnnonceComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var DeposerAnnonceComponent = /** @class */ (function () {
    // tslint:disable-next-line:typedef
    function DeposerAnnonceComponent(habitatsTypesApi, router, authService, deposerService) {
        this.habitatsTypesApi = habitatsTypesApi;
        this.router = router;
        this.authService = authService;
        this.deposerService = deposerService;
        this.errors = null;
        this.files = [];
    }
    // tslint:disable-next-line:typedef
    DeposerAnnonceComponent.prototype.onFileChanged = function (event) {
        console.log(event.target.files);
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < event.target.files.length; i++) {
            this.files.push(event.target.files[i]);
        }
    };
    DeposerAnnonceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.habitatsTypesApi.getHabitatsTypes().subscribe(function (data) {
            _this.type1 = data;
            _this.type2 = _this.type1.typeHabitats;
            console.log(_this.type2);
        });
        // tslint:disable-next-line:typedef
        this.deposerAnnonceForm = new forms_2.FormGroup({
            title: new forms_1.FormControl(null, forms_1.Validators.required),
            description: new forms_1.FormControl(null, forms_1.Validators.required),
            nombreChambre: new forms_1.FormControl(1, [
                forms_1.Validators.required,
                forms_1.Validators.pattern('^[0-9]*$'),
                forms_1.Validators.min(1),
            ]),
            prixParNuit: new forms_1.FormControl(null, forms_1.Validators.required),
            nombreLit: new forms_1.FormControl(null, [
                forms_1.Validators.required,
                forms_1.Validators.pattern('^[0-9]*$')
            ]),
            adresse: new forms_1.FormControl(null, forms_1.Validators.required),
            hasTelevision: new forms_1.FormControl(null, forms_1.Validators.required),
            hasChauffage: new forms_1.FormControl(null, forms_1.Validators.required),
            hasInternet: new forms_1.FormControl(null, forms_1.Validators.required),
            hasClimatiseur: new forms_1.FormControl(null, forms_1.Validators.required),
            typeHabitat: new forms_1.FormControl(null, forms_1.Validators.required),
            vues: new forms_1.FormControl([], [forms_1.Validators.required, forms_1.Validators.min(1)])
        });
        // tslint:disable-next-line:typedef
    };
    // tslint:disable-next-line:typedef
    DeposerAnnonceComponent.prototype.onSubmitApply = function () {
        var _this = this;
        this.formData = new FormData();
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < this.files.length; i++) {
            this.formData.append('vues[]', this.files[i]);
        }
        this.formData.append('title', this.deposerAnnonceForm.get('title').value);
        this.formData.append('description', this.deposerAnnonceForm.get('description').value);
        this.formData.append('nombreChambre', this.deposerAnnonceForm.get('nombreChambre').value);
        this.formData.append('prixParNuit', this.deposerAnnonceForm.get('prixParNuit').value);
        this.formData.append('nombreLit', this.deposerAnnonceForm.get('nombreLit').value);
        this.formData.append('adresse', this.deposerAnnonceForm.get('adresse').value);
        this.formData.append('hasTelevision', this.deposerAnnonceForm.get('hasTelevision').value);
        this.formData.append('hasChauffage', this.deposerAnnonceForm.get('hasChauffage').value);
        this.formData.append('hasInternet', this.deposerAnnonceForm.get('hasInternet').value);
        this.formData.append('hasClimatiseur', this.deposerAnnonceForm.get('hasClimatiseur').value);
        this.formData.append('typeHabitat', this.deposerAnnonceForm.get('typeHabitat').value);
        this.deposerService.addHabitat(this.formData).subscribe(function (result) {
            console.log(result);
            _this.success = result.success;
        }, function (error) {
            console.log(_this.formData);
            _this.errors = error.error;
        }, function () {
            _this.deposerAnnonceForm.reset();
        });
        console.log(this.deposerAnnonceForm.value);
    };
    DeposerAnnonceComponent = __decorate([
        core_1.Component({
            selector: 'app-deposer-annonce',
            templateUrl: './deposer-annonce.component.html',
            styleUrls: ['./deposer-annonce.component.scss']
        })
    ], DeposerAnnonceComponent);
    return DeposerAnnonceComponent;
}());
exports.DeposerAnnonceComponent = DeposerAnnonceComponent;
//# sourceMappingURL=deposer-annonce.component.js.map