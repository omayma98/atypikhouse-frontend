"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SignupComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, fb, authService) {
        this.router = router;
        this.fb = fb;
        this.authService = authService;
        this.registerForm = this.fb.group({
            name: new forms_1.FormControl(null, forms_1.Validators.required),
            email: new forms_1.FormControl(null, [
                forms_1.Validators.required,
                forms_1.Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
            ]),
            adresse: new forms_1.FormControl(null, forms_1.Validators.required),
            telephone: new forms_1.FormControl(null, forms_1.Validators.required),
            password: new forms_1.FormControl(null, forms_1.Validators.required),
            password_confirmation: new forms_1.FormControl(null, forms_1.Validators.required)
        });
    }
    SignupComponent.prototype.ngOnInit = function () { };
    // tslint:disable-next-line:typedef
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.register(this.registerForm.value).subscribe(function (result) {
            _this.success = result.success;
            console.log(result);
        }, function (error) {
            _this.errors = error.error;
        }, function () {
            _this.registerForm.reset();
            setTimeout(function () {
                _this.router.navigate(['login']);
            }, 2000);
        });
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.scss']
        })
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map