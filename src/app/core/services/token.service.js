"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TokenService = void 0;
var core_1 = require("@angular/core");
var TokenService = /** @class */ (function () {
    function TokenService() {
        this.issuer = {
            login: 'http://admin.atypik-house.com/api/login',
            register: 'http://admin.atypik-house.com/api/register'
        };
    }
    // tslint:disable-next-line:typedef
    TokenService.prototype.handleData = function (token) {
        sessionStorage.setItem('access_token', token);
    };
    // tslint:disable-next-line:typedef
    TokenService.prototype.getToken = function () {
        return sessionStorage.getItem('access_token');
    };
    // Verify the token
    // tslint:disable-next-line:typedef
    TokenService.prototype.isValidToken = function () {
        var token = this.getToken();
        if (token) {
            var payload = this.payload(token);
            if (payload) {
                return Object.values(this.issuer).indexOf(payload.iss) > -1;
            }
        }
        else {
            return false;
        }
    };
    // tslint:disable-next-line:typedef
    TokenService.prototype.payload = function (token) {
        var jwtPayload = token.split('.')[1];
        return JSON.parse(atob(jwtPayload));
    };
    // User state based on valid token
    // tslint:disable-next-line:typedef
    TokenService.prototype.isLoggedIn = function () {
        return this.isValidToken();
    };
    // Remove token
    // tslint:disable-next-line:typedef
    TokenService.prototype.removeToken = function () {
        sessionStorage.removeItem('access_token');
        sessionStorage.removeItem("UserId");
        sessionStorage.removeItem("UserName");
        sessionStorage.removeItem("UserEmail");
        sessionStorage.removeItem("UserTel");
        sessionStorage.removeItem("UserAdress");
        sessionStorage.removeItem("UserRole");
        sessionStorage.removeItem("UserWantAdd");
        sessionStorage.removeItem("UserCanAdd");
    };
    TokenService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TokenService);
    return TokenService;
}());
exports.TokenService = TokenService;
//# sourceMappingURL=token.service.js.map