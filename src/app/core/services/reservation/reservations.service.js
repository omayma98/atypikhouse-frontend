"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ReservationsService = exports.Reservation = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("../../../../environments/environment");
var Reservation = /** @class */ (function () {
    function Reservation() {
    }
    return Reservation;
}());
exports.Reservation = Reservation;
var ReservationsService = /** @class */ (function () {
    function ReservationsService(http) {
        this.http = http;
        this.baseUrl = environment_1.environment.apiURL + 'habitats/reservations/';
    }
    ReservationsService.prototype.addReservation = function (reservation, habitatId) {
        return this.http.post(this.baseUrl + 'add/' + habitatId, reservation);
    };
    ReservationsService.prototype.getAllMyRerservation = function () {
        return this.http.get(this.baseUrl + 'allUsersReservations');
    };
    ReservationsService.prototype.getReservationDetails = function (idReservation) {
        return this.http.get(this.baseUrl + 'details/' + idReservation);
    };
    ReservationsService.prototype.autoCancelReservation = function (idReservation) {
        return this.http.get(this.baseUrl + 'autoCancel/' + idReservation);
    };
    ReservationsService.prototype.makePayement = function (idReservation) {
        return this.http.get(this.baseUrl + 'makePayement/' + idReservation);
    };
    ReservationsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ReservationsService);
    return ReservationsService;
}());
exports.ReservationsService = ReservationsService;
//# sourceMappingURL=reservations.service.js.map
