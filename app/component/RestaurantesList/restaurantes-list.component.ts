// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';
import {RestauranteService} from "../../services/restaurante.service";
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'restaurantes-list',
    templateUrl: "app/view/restaurantes-list.html",
    providers: [RestauranteService]
})
 
// Clase del componente donde iran los datos y funcionalidades
export class RestaurantesListComponent {
   public tituloComponente:string = "Listado de restaurantes";

   constructor(private _restauranteService: RestauranteService){

   }

   ngOnInit(){
       console.log("restaurantes-list component cargado");
   }
}