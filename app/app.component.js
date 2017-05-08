System.register(['angular2/core', 'angular2/router', './component/RestaurantesList/restaurantes-list.component', './component/RestauranteDetalle/restaurante-detalle.component', './component/RestauranteAgregar/restaurante-agregar.component', './component/RestauranteEditar/restaurante-editar.component'], function(exports_1, context_1) {
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
    var core_1, router_1, restaurantes_list_component_1, restaurante_detalle_component_1, restaurante_agregar_component_1, restaurante_editar_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (restaurantes_list_component_1_1) {
                restaurantes_list_component_1 = restaurantes_list_component_1_1;
            },
            function (restaurante_detalle_component_1_1) {
                restaurante_detalle_component_1 = restaurante_detalle_component_1_1;
            },
            function (restaurante_agregar_component_1_1) {
                restaurante_agregar_component_1 = restaurante_agregar_component_1_1;
            },
            function (restaurante_editar_component_1_1) {
                restaurante_editar_component_1 = restaurante_editar_component_1_1;
            }],
        execute: function() {
            // Decorador component, indicamos en que etiqueta se va a cargar la plantilla
            AppComponent = (function () {
                function AppComponent() {
                    this.tituloComponente = "Restaurantes";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: "app/view/restaurantes.html",
                        directives: [restaurantes_list_component_1.RestaurantesListComponent, restaurante_detalle_component_1.RestauranteDetalleComponent, restaurante_agregar_component_1.RestauranteAgregarComponent, restaurante_editar_component_1.RestauranteEditarComponent,
                            router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Home', component: restaurantes_list_component_1.RestaurantesListComponent, useAsDefault: true },
                        { path: '/restaurante/:id', name: 'Restaurante', component: restaurante_detalle_component_1.RestauranteDetalleComponent, useAsDefault: false },
                        { path: '/crear-restaurante', name: 'CrearRestaurante', component: restaurante_agregar_component_1.RestauranteAgregarComponent, useAsDefault: false },
                        { path: '/editar-restaurante/:id', name: 'EditarRestaurante', component: restaurante_editar_component_1.RestauranteEditarComponent, useAsDefault: false },
                        { path: '/donde-como-hoy/:random', name: 'DondeComoHoy', component: restaurante_detalle_component_1.RestauranteDetalleComponent, useAsDefault: false }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map