// Importar el núcleo de Angular
import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {RestauranteService} from "../../services/restaurante.service";
import {Restaurante} from "../../model/restaurante";
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'restaurante-agregar',
    templateUrl: "app/view/restaurante-agregar.html",
    providers: [RestauranteService]
})
 
// Clase del componente donde iran los datos y funcionalidades
export class RestauranteAgregarComponent implements OnInit {
    public restaurante:Restaurante ;
    public status:string;
    public errorMessage:string;
    public loading:string;


    constructor(private _restauranteService:RestauranteService, private _routerParams:RouteParams, private _router:Router){

    }

    ngOnInit():any{
        this.restaurante = new Restaurante(0, this._routerParams.get("nombre"), this._routerParams.get("direccion"), 
        this._routerParams.get("descripcion"), "null", "bajo");
        console.log("ComponenteAgregar cargado");
    }
}