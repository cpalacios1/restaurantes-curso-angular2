System.register(['angular2/core', 'angular2/router', "../../services/restaurante.service", "../../model/restaurante"], function(exports_1, context_1) {
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
    var core_1, router_1, restaurante_service_1, restaurante_1;
    var RestauranteEditarComponent;
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
            },
            function (restaurante_1_1) {
                restaurante_1 = restaurante_1_1;
            }],
        execute: function() {
            // Decorador component, indicamos en que etiqueta se va a cargar la plantilla
            RestauranteEditarComponent = (function () {
                function RestauranteEditarComponent(_restauranteService, _routerParams, _router) {
                    this._restauranteService = _restauranteService;
                    this._routerParams = _routerParams;
                    this._router = _router;
                    this.tituloComponente = "Editar restaurante";
                }
                RestauranteEditarComponent.prototype.ngOnInit = function () {
                    this.restaurante = new restaurante_1.Restaurante(0, "null", "null", "null", "null", "bajo");
                    if (this._routerParams.get("id") !== null) {
                        console.log("Carga restaurante");
                        this.getRestaurante();
                    }
                    console.log("ComponenteAgregar cargado");
                };
                RestauranteEditarComponent.prototype.getRestaurante = function () {
                    var _this = this;
                    var id = this._routerParams.get("id");
                    this._restauranteService.getRestaurante(id)
                        .subscribe(function (Response) {
                        _this.restaurante = Response.data;
                        _this.status = Response.status;
                        if (_this.status !== "success") {
                            //alert("Error en el servidor");
                            _this._router.navigate(['Home']);
                        }
                        _this.loading = 'hide';
                        console.log(_this.restaurante);
                        /*box_restaurantes.style.display = "none";*/
                    }, function (error) {
                        _this.errorMessage = error;
                        if (_this.errorMessage !== null) {
                            console.log(_this.errorMessage);
                            alert("Error en la petición");
                        }
                    });
                };
                RestauranteEditarComponent.prototype.onSubmit = function () {
                    /*console.log(this.restaurante);
                    this._restauranteService.addRestaurante(this.restaurante)
                    .subscribe(
                        response =>{
                            this.status = response.status;
                            if(this.status!=="success"){
                                alert("Error en el servidor");
                            } else {
                                console.log("Restaurante credo con éxito");
                                this._router.navigate(["Home"]);
                            }
                        }, error => {
                            this.errorMessage = <any>error;
            
                            if(this.errorMessage!==null){
                                console.log(this.errorMessage);
                                alert("Error en la petición");
                            }
                        }
                    );*/
                };
                RestauranteEditarComponent.prototype.callPrecio = function (value) {
                    this.restaurante.precio = value;
                };
                RestauranteEditarComponent = __decorate([
                    core_1.Component({
                        selector: 'restaurante-editar',
                        templateUrl: "app/view/restaurante-agregar.html",
                        providers: [restaurante_service_1.RestauranteService]
                    }), 
                    __metadata('design:paramtypes', [restaurante_service_1.RestauranteService, router_1.RouteParams, router_1.Router])
                ], RestauranteEditarComponent);
                return RestauranteEditarComponent;
            }());
            exports_1("RestauranteEditarComponent", RestauranteEditarComponent);
        }
    }
});
//# sourceMappingURL=restaurante-editar.component.js.map