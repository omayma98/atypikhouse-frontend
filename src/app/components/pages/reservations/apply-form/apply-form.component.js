"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ApplyFormComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var moment_1 = require("moment");
// @ts-ignore
var ApplyFormComponent = /** @class */ (function () {
    function ApplyFormComponent(authService, http, router, reservationservice, currentRoute, spinner) {
        this.authService = authService;
        this.http = http;
        this.router = router;
        this.reservationservice = reservationservice;
        this.currentRoute = currentRoute;
        this.spinner = spinner;
        this.habitatIndisponible = false;
        this.formData = new FormData();
        this.canMakePayment = false;
        this.now = new Date();
        this.year = this.now.getFullYear();
        this.month = this.now.getMonth();
        this.day = this.now.getDay();
        this.minDate = moment_1["default"](new Date()).format('YYYY-MM-DD');
        this.maxDate = '2021-09-08';
        this.submitted = false;
    }
    ApplyFormComponent.prototype.ngOnInit = function () {
        this.initConfig();
        // @ts-ignore
        this.applyForm = new forms_2.FormGroup({
            dateArrivee: new forms_1.FormControl(null, [forms_1.Validators.required,
                forms_1.Validators.min(moment_1["default"](new Date()).millisecond())]),
            dateDepart: new forms_1.FormControl(null, forms_1.Validators.required),
            nbrOccupant: new forms_1.FormControl(1, [forms_1.Validators.required, forms_1.Validators.min(1)])
        });
    };
    ApplyFormComponent.prototype.initConfig = function () {
        var _this = this;
        this.payPalConfig = {
            currency: 'EUR',
            clientId: 'sb',
            createOrderOnClient: function (data) { return ({
                intent: 'CAPTURE',
                purchase_units: [
                    {
                        amount: {
                            currency_code: 'EUR',
                            value: _this.montantTotal,
                            breakdown: {
                                item_total: {
                                    currency_code: 'EUR',
                                    value: _this.montantTotal
                                }
                            }
                        },
                    }
                ]
            }); },
            style: {
                label: 'paypal',
                layout: 'vertical'
            },
            onApprove: function (data, actions) {
                _this.reservationservice.makePayement(_this.id).subscribe(function (successData) {
                    _this.successMessage = successData === null || successData === void 0 ? void 0 : successData.success;
                    _this.canMakePayment = false;
                    _this.applyForm.reset();
                }, function (response) {
                    var _a;
                    _this.serverErrors = (_a = response === null || response === void 0 ? void 0 : response.errors) === null || _a === void 0 ? void 0 : _a.error;
                });
            },
            onCancel: function (data, actions) {
                _this.reservationservice.autoCancelReservation(_this.id).subscribe(function (successData) {
                    _this.successMessage = successData === null || successData === void 0 ? void 0 : successData.success;
                    _this.canMakePayment = false;
                    _this.applyForm.reset();
                }, function (response) {
                    var _a;
                    _this.serverErrors = (_a = response === null || response === void 0 ? void 0 : response.errors) === null || _a === void 0 ? void 0 : _a.error;
                });
            },
            onError: function (err) {
                _this.serverErrors = err;
            },
        };
    };
    // tslint:disable-next-line:typedef
    ApplyFormComponent.prototype.onSubmitApply = function () {
        var _this = this;
        this.spinner.show();
        this.reservationservice.addReservation(this.applyForm.value, this.habitatid).subscribe(function (successData) {
            _this.montantTotal = successData.montantTotal;
            _this.nombreTotalDeNuit = successData.nombreTotalDeNuit;
            _this.id = successData.id;
            _this.canMakePayment = true;
        }, function (response) {
            var _a, _b;
            // tslint:disable-next-line:typedef
            setTimeout(function () { _this.spinner.hide(); }, 500);
            _this.serverErrors = (_a = response.error) === null || _a === void 0 ? void 0 : _a.error;
            _this.validationErrors = (_b = response.error) === null || _b === void 0 ? void 0 : _b.validationErrors;
            if (response.error.habitatIndisponible) {
                _this.habitatIndisponible = true;
                _this.dateIndisponibleFrom = new Date(response.error.habitatIndisponible.dateArrivee);
                _this.dateIndisponibleTo = new Date(response.error.habitatIndisponible.dateDepart);
            }
        }, function () {
            setTimeout(function () { _this.spinner.hide(); }, 500);
        });
    };
    __decorate([
        core_1.Input()
    ], ApplyFormComponent.prototype, "habitatid");
    ApplyFormComponent = __decorate([
        core_1.Component({
            selector: 'app-apply-form',
            templateUrl: './apply-form.component.html',
            styleUrls: ['./apply-form.component.scss']
        })
    ], ApplyFormComponent);
    return ApplyFormComponent;
}());
exports.ApplyFormComponent = ApplyFormComponent;
//# sourceMappingURL=apply-form.component.js.map