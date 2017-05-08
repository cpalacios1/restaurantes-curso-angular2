// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';
import {RestaurantesListComponent} from './component/RestaurantesList/restaurantes-list.component';
import {RestauranteDetalleComponent} from './component/RestauranteDetalle/restaurante-detalle.component';
import {RestauranteAgregarComponent} from './component/RestauranteAgregar/restaurante-agregar.component';
import {RestauranteEditarComponent} from './component/RestauranteEditar/restaurante-editar.component';
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    templateUrl: "app/view/restaurantes.html",
    directives: [RestaurantesListComponent, RestauranteDetalleComponent, RestauranteAgregarComponent, RestauranteEditarComponent,
    ROUTER_DIRECTIVES]
})
 
@RouteConfig([
    {path: '/', name:'Home', component: RestaurantesListComponent, useAsDefault: true},
    {path: '/restaurante/:id', name:'Restaurante', component: RestauranteDetalleComponent, useAsDefault: false},
    {path: '/crear-restaurante', name:'CrearRestaurante', component: RestauranteAgregarComponent, useAsDefault: false},
    {path: '/editar-restaurante/:id', name:'EditarRestaurante', component: RestauranteEditarComponent, useAsDefault: false},
    {path: '/donde-como-hoy/:random', name:'DondeComoHoy', component: RestauranteDetalleComponent, useAsDefault: false}
])

// Clase del componente donde iran los datos y funcionalidades
export class AppComponent {
   public tituloComponente:string = "Restaurantes";
}