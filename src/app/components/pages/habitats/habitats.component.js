"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HabitatsComponent = void 0;
var core_1 = require("@angular/core");
var HabitatsComponent = /** @class */ (function () {
    function HabitatsComponent(deposerService) {
        this.deposerService = deposerService;
    }
    HabitatsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.deposerService.getAll().subscribe(function (data) {
            _this.type1 = data;
            _this.Slides2 = _this.type1.habitats;
            console.log(_this.Slides2);
        });
    };
    HabitatsComponent = __decorate([
        core_1.Component({
            selector: 'app-habitats',
            templateUrl: './habitats.component.html',
            styleUrls: ['./habitats.component.scss']
        })
    ], HabitatsComponent);
    return HabitatsComponent;
}());
exports.HabitatsComponent = HabitatsComponent;
//# sourceMappingURL=habitats.component.js.map