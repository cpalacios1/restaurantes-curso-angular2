// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';
import {RestauranteService} from "../../services/restaurante.service";
import {Restaurante} from "../../model/restaurante";
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'restaurantes-list',
    templateUrl: "app/view/restaurantes-list.html",
    providers: [RestauranteService],
    directives: [ROUTER_DIRECTIVES]
})
 
// Clase del componente donde iran los datos y funcionalidades
export class RestaurantesListComponent {
   public tituloComponente:string = "Listado de restaurantes";
   public restaurantes: Restaurante[];
   public status:string;
   public errorMessage:string;
   public loading:string;

   constructor(private _restauranteService: RestauranteService){

   }

   ngOnInit(){
       this.loading = 'show';
       this.getRestaurantes();
       console.log("restaurantes-list component cargado");
   }

   getRestaurantes(){
       /* Prueba de visibilidad de la imagen de carga con manipulación del DOM con Javascript
       let box_restaurantes = <HTMLElement>document.querySelector("#restaurantes-list .loading");
       box_restaurantes.style.visibility = "visible";*/
       this._restauranteService.getRestaurantes().subscribe(
           result => {
               this.restaurantes = result.data;
               this.status = result.status;
               if(this.status!=="success"){
                    alert("Error en el servidor");
               }
               this.loading = 'hide';
               /*box_restaurantes.style.display = "none";*/
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