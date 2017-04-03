// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';
import {RestauranteService} from "../../services/restaurante.service";
import {Restaurante} from "../../model/restaurante";
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'restaurantes-list',
    templateUrl: "app/view/restaurantes-list.html",
    providers: [RestauranteService]
})
 
// Clase del componente donde iran los datos y funcionalidades
export class RestaurantesListComponent {
   public tituloComponente:string = "Listado de restaurantes";
   public restaurantes: Restaurante[];
   public status:string;
   public errorMessage:string;

   constructor(private _restauranteService: RestauranteService){

   }

   ngOnInit(){
       this.getRestaurantes();
       console.log("restaurantes-list component cargado");
   }

   getRestaurantes(){
       this._restauranteService.getRestaurantes().subscribe(
           result => {
               this.restaurantes = result.data;
               this.status = result.status;
               if(this.status!=="success"){
                    alert("Error en el servidor");
               }
           }, error => {
                this.errorMessage = <any>error;

                if(this.errorMessage!==null){
                    console.log(this.errorMessage);
                    alert("Error en la petición");
                }
           }
       );
   }
}