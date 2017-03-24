// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    templateUrl: "app/view/restaurantes.html",
    directives: [ROUTER_DIRECTIVES]
})
 
// Clase del componente donde iran los datos y funcionalidades
export class AppComponent {
   public tituloComponente:string = "Restaurantes";
}