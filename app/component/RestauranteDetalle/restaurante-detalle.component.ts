// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {RestauranteService} from "../../services/restaurante.service";
import {Restaurante} from "../../model/restaurante";
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'restaurante-detalle',
    templateUrl: "app/view/restaurante-detalle.html",
    providers: [RestauranteService]
})
 
// Clase del componente donde iran los datos y funcionalidades
export class RestauranteDetalleComponent {
    public parametro:number ;
    public restaurante:Restaurante ;
    public status:string;
    public errorMessage:string;
    public loading:string;


    constructor(private _restauranteService:RestauranteService, private _routerParams:RouteParams ){

    }

    ngOnInit(){
        this.parametro = this._routerParams.get("id")!=null?parseInt(this._routerParams.get("id")):null;
        console.log("restaurantes-detalle component cargado");
    }

    getRestaurante(){
        let id = this._routerParams.get("");
        this._restauranteService.getRestaurante(id)
        .subscribe(
            Response =>{
               this.restaurante = Response.data;
               this.status = Response.status;
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