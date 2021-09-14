"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SigninComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var SigninComponent = /** @class */ (function () {
    function SigninComponent(router, authService, token, authState) {
        this.router = router;
        this.authService = authService;
        this.token = token;
        this.authState = authState;
        this.errors = null;
        this.isVisible = false;
        this.loginForm = new forms_1.FormGroup({
            'email': new forms_1.FormControl(null, [
                forms_1.Validators.required,
                forms_1.Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
            ]),
            'password': new forms_1.FormControl(null, forms_1.Validators.required)
        });
    }
    SigninComponent.prototype.ngOnInit = function () { };
    SigninComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.signin(this.loginForm.value).subscribe(function (result) {
            _this.success = result.success;
            _this.responseHandler(result);
            sessionStorage.setItem("UserId", result.user.id);
            sessionStorage.setItem("UserName", result.user.name);
            sessionStorage.setItem("UserEmail", result.user.email);
            sessionStorage.setItem("UserTel", result.user.telephone);
            sessionStorage.setItem("UserAdress", result.user.adresse);
            sessionStorage.setItem("UserRole", result.user.role);
            sessionStorage.setItem("UserWantAdd", result.user.wantToAddHabitat);
            sessionStorage.setItem("UserCanAdd", result.user.canAddHabitat);
        }, function (res) {
            _this.errors = res.error.error;
        }, function () {
            _this.authState.setAuthState(true);
            _this.loginForm.reset();
            // @ts-ignore
            setTimeout(function () {
                _this.router.navigate(['habitats']);
            }, 2000);
        });
    };
    // Handle response
    // tslint:disable-next-line:typedef
    SigninComponent.prototype.responseHandler = function (data) {
        this.token.handleData(data.access_token);
    };
    SigninComponent = __decorate([
        core_1.Component({
            selector: 'app-signin',
            templateUrl: './signin.component.html',
            styleUrls: ['./signin.component.scss']
        })
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;
//# sourceMappingURL=signin.component.js.map