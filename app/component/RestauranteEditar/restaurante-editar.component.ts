// Importar el núcleo de Angular
import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {RestauranteService} from "../../services/restaurante.service";
import {Restaurante} from "../../model/restaurante";
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'restaurante-editar',
    templateUrl: "app/view/restaurante-agregar.html",
    providers: [RestauranteService]
})
 
// Clase del componente donde iran los datos y funcionalidades
export class RestauranteEditarComponent implements OnInit {
    public tituloComponente:string = "Editar restaurante";
    public restaurante:Restaurante ;
    public status:string;
    public errorMessage:string;
    public loading:string;
    public id:string;


    constructor(private _restauranteService:RestauranteService, private _routerParams:RouteParams, private _router:Router){

    }

    ngOnInit():any{
        this.restaurante = new Restaurante(0, "null", "null", "null", "null", "bajo");
        this.id = this._routerParams.get("id");
        if(this.id!==null){
            console.log("Carga restaurante");
            this.getRestaurante();
        }
        
        console.log("ComponenteAgregar cargado");
    }

    getRestaurante(){
        this._restauranteService.getRestaurante(this.id)
        .subscribe(
            Response =>{
               this.restaurante = Response.data;
               this.status = Response.status;
               if(this.status!=="success"){
                    //alert("Error en el servidor");
                    this._router.navigate(['Home']);
               }
               this.loading = 'hide';
               console.log(this.restaurante);
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

    onSubmit(){
        console.log(this.restaurante);
        this._restauranteService.editRestaurante(this.id, this.restaurante)
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
        );
        
    }

    callPrecio(value){
        this.restaurante.precio = value;
    }
}