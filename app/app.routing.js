"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var restaurantes_list_component_1 = require("./component/RestaurantesList/restaurantes-list.component");
var restaurante_detalle_component_1 = require("./component/RestauranteDetalle/restaurante-detalle.component");
var restaurante_agregar_component_1 = require("./component/RestauranteAgregar/restaurante-agregar.component");
var restaurante_editar_component_1 = require("./component/RestauranteEditar/restaurante-editar.component");
var appRoutes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '/', component: restaurantes_list_component_1.RestaurantesListComponent },
    { path: '/restaurante/:id', component: restaurante_detalle_component_1.RestauranteDetalleComponent },
    { path: '/crear-restaurante', component: restaurante_agregar_component_1.RestauranteAgregarComponent },
    { path: '/editar-restaurante/:id', component: restaurante_editar_component_1.RestauranteEditarComponent },
    { path: '/donde-como-hoy/:random', component: restaurante_detalle_component_1.RestauranteDetalleComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map