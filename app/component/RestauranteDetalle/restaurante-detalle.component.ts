// Importar el núcleo de Angular
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
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
    public restaurante:Restaurante ;
    public status:string;
    public errorMessage:string;
    public loading:string;


    constructor(private _route:ActivatedRoute, private _router: Router, private _restauranteService:RestauranteService){

    }

    ngOnInit(){
       this.getRestaurante();
    }

    getRestaurante(){
        this._route.params.forEach((params: Params) => {
                let id = params["id"];
                let random = params["random"];
                this._restauranteService.getRestaurante(id, random)
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
        })
        
    }
}