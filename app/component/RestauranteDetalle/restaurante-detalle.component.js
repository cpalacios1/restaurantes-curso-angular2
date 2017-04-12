System.register(['angular2/core', 'angular2/router', "../../services/restaurante.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, restaurante_service_1;
    var RestauranteDetalleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (restaurante_service_1_1) {
                restaurante_service_1 = restaurante_service_1_1;
            }],
        execute: function() {
            // Decorador component, indicamos en que etiqueta se va a cargar la plantilla
            RestauranteDetalleComponent = (function () {
                function RestauranteDetalleComponent(_restauranteService, _routerParams) {
                    this._restauranteService = _restauranteService;
                    this._routerParams = _routerParams;
                }
                RestauranteDetalleComponent.prototype.ngOnInit = function () {
                    this.parametro = this._routerParams.get("id") != null ? parseInt(this._routerParams.get("id")) : null;
                    console.log("restaurantes-detalle component cargado");
                };
                RestauranteDetalleComponent.prototype.getRestaurante = function () {
                    var _this = this;
                    var id = this._routerParams.get("");
                    this._restauranteService.getRestaurante(id)
                        .subscribe(function (Response) {
                        _this.restaurante = Response.data;
                        _this.status = Response.status;
                        if (_this.status !== "success") {
                            alert("Error en el servidor");
                        }
                        _this.loading = 'hide';
                        /*box_restaurantes.style.display = "none";*/
                    }, function (error) {
                        _this.errorMessage = error;
                        if (_this.errorMessage !== null) {
                            console.log(_this.errorMessage);
                            alert("Error en la petición");
                        }
                    });
                };
                RestauranteDetalleComponent = __decorate([
                    core_1.Component({
                        selector: 'restaurante-detalle',
                        templateUrl: "app/view/restaurante-detalle.html",
                        providers: [restaurante_service_1.RestauranteService]
                    }), 
                    __metadata('design:paramtypes', [restaurante_service_1.RestauranteService, router_1.RouteParams])
                ], RestauranteDetalleComponent);
                return RestauranteDetalleComponent;
            }());
            exports_1("RestauranteDetalleComponent", RestauranteDetalleComponent);
        }
    }
});
//# sourceMappingURL=restaurante-detalle.component.js.map