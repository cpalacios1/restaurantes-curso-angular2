"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_routing_1 = require("./app.routing");
var restaurantes_list_component_1 = require("./component/RestaurantesList/restaurantes-list.component");
var restaurante_detalle_component_1 = require("./component/RestauranteDetalle/restaurante-detalle.component");
var restaurante_agregar_component_1 = require("./component/RestauranteAgregar/restaurante-agregar.component");
var restaurante_editar_component_1 = require("./component/RestauranteEditar/restaurante-editar.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, http_1.JsonpModule, forms_1.FormsModule, app_routing_1.routing],
        declarations: [app_component_1.AppComponent,
            restaurantes_list_component_1.RestaurantesListComponent,
            restaurante_detalle_component_1.RestauranteDetalleComponent,
            restaurante_agregar_component_1.RestauranteAgregarComponent,
            restaurante_editar_component_1.RestauranteEditarComponent],
        providers: [app_routing_1.appRoutingProviders],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map