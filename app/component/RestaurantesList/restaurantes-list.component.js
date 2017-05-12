"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importar el núcleo de Angular
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var restaurante_service_1 = require("../../services/restaurante.service");
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
var RestaurantesListComponent = (function () {
    function RestaurantesListComponent(_route, _router, _restauranteService) {
        this._route = _route;
        this._router = _router;
        this._restauranteService = _restauranteService;
        this.tituloComponente = "Listado de restaurantes";
    }
    RestaurantesListComponent.prototype.ngOnInit = function () {
        this.loading = 'show';
        this.getRestaurantes();
        console.log("restaurantes-list component cargado");
    };
    RestaurantesListComponent.prototype.getRestaurantes = function () {
        var _this = this;
        /* Prueba de visibilidad de la imagen de carga con manipulación del DOM con Javascript
        let box_restaurantes = <HTMLElement>document.querySelector("#restaurantes-list .loading");
        box_restaurantes.style.visibility = "visible";*/
        this._restauranteService.getRestaurantes().subscribe(function (result) {
            _this.restaurantes = result.data;
            _this.status = result.status;
            if (_this.status !== "success") {
                alert("Error en el servidor");
            }
            _this.loading = 'hide';
            console.log('Lista cargada');
            /*box_restaurantes.style.display = "none";*/
        }, function (error) {
            _this.errorMessage = error;
            alert("Error en la petición");
            if (_this.errorMessage !== null) {
                console.log(_this.errorMessage);
                alert("Error en la petición");
            }
        });
    };
    RestaurantesListComponent.prototype.onMostrarModalEliminar = function (id) {
        this.mostrarModalEliminar = true;
        this.idRestauranteEliminar = id;
    };
    RestaurantesListComponent.prototype.onCancelarEliminar = function () {
        this.mostrarModalEliminar = false;
        this.idRestauranteEliminar = null;
    };
    RestaurantesListComponent.prototype.onEliminarRestaurante = function () {
        var _this = this;
        this._restauranteService.deleteRestaurante(this.idRestauranteEliminar).subscribe(function (result) {
            _this.status = result.status;
            if (_this.status !== "success") {
                alert("Error en el servidor");
            }
            _this.getRestaurantes();
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage !== null) {
                console.log(_this.errorMessage);
                alert("Error en la petición");
            }
        });
        this.mostrarModalEliminar = false;
        this.idRestauranteEliminar = null;
    };
    return RestaurantesListComponent;
}());
RestaurantesListComponent = __decorate([
    core_1.Component({
        selector: 'restaurantes-list',
        templateUrl: "app/view/restaurantes-list.html",
        providers: [restaurante_service_1.RestauranteService]
    })
    // Clase del componente donde iran los datos y funcionalidades
    ,
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, restaurante_service_1.RestauranteService])
], RestaurantesListComponent);
exports.RestaurantesListComponent = RestaurantesListComponent;
//# sourceMappingURL=restaurantes-list.component.js.map