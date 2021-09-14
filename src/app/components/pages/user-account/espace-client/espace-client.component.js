"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EspaceClientComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var EspaceClientComponent = /** @class */ (function () {
    function EspaceClientComponent(authService, deposerService) {
        this.authService = authService;
        this.deposerService = deposerService;
        this.UserName = sessionStorage.getItem('UserName');
        this.UserEmail = sessionStorage.getItem('UserEmail');
        this.UserId = sessionStorage.getItem("Userid");
        this.UserTel = sessionStorage.getItem("UserTel");
        this.UserAdress = sessionStorage.getItem("UserAdress");
        this.UserRole = sessionStorage.getItem("UserRole");
        this.UserWantAdd = sessionStorage.getItem("UserWantAdd");
        this.UserCanAdd = sessionStorage.getItem("UserCanAdd");
        this.submitted = false;
    }
    EspaceClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.askAddForm = new forms_1.FormGroup({
            nomEntreprise: new forms_1.FormControl(null, forms_1.Validators.required),
            siren: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(9)])
        });
        this.deposerService.getUserResesrvations().subscribe(function (data) {
            _this.historic = data;
            _this.historicData = _this.historic.habitats;
            console.log(_this.historic);
        });
    };
    Object.defineProperty(EspaceClientComponent.prototype, "f", {
        get: function () { return this.askAddForm.controls; },
        enumerable: false,
        configurable: true
    });
    EspaceClientComponent.prototype.onSubmitApply = function () {
        var _this = this;
        this.submitted = true;
        this.deposerService.askAddHabit(this.askAddForm.value).subscribe(function (result) {
            console.log(result);
            _this.success = result.success;
            console.log(_this.success);
        }, function (error) {
            _this.errors = error.error;
        }, function () {
            _this.askAddForm.reset();
            /*this.router.navigate(['accueil']);*/
        });
        console.log(this.askAddForm.value);
    };
    EspaceClientComponent = __decorate([
        core_1.Component({
            selector: 'app-espace-client',
            templateUrl: './espace-client.component.html',
            styleUrls: ['./espace-client.component.scss']
        })
    ], EspaceClientComponent);
    return EspaceClientComponent;
}());
exports.EspaceClientComponent = EspaceClientComponent;
//# sourceMappingURL=espace-client.component.js.map