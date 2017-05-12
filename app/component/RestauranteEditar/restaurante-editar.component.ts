// Importar el núcleo de Angular
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
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
    public filesToUpload: Array<File>;
    public resultUpload;


    constructor(private _route:ActivatedRoute, private _router: Router, private _restauranteService:RestauranteService){

    }

    ngOnInit():any{
        this._route.params.forEach((params: Params) => {
            this.restaurante = new Restaurante(0, "null", "null", "null", "", "bajo");
            this.id = params["id"];
            if(this.id!==null){
                console.log("Carga restaurante");
                this.getRestaurante();
            }
            
            console.log("ComponenteAgregar cargado");
        });
        
    }

    getRestaurante(){
        this._restauranteService.getRestaurante(this.id)
        .subscribe(
            Response =>{
               this.restaurante = Response.data;
               this.status = Response.status;
               if(this.status!=="success"){
                    //alert("Error en el servidor");
                    this._router.navigate(['/']);
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
         this._route.params.forEach((params: Params) => {
            this._restauranteService.editRestaurante(this.id, this.restaurante)
            .subscribe(
                response =>{
                    this.status = response.status;
                    if(this.status!=="success"){
                        alert("Error en el servidor");
                    } else {
                        console.log("Restaurante credo con éxito");
                        this._router.navigate(["/"]);
                    }
                }, error => {
                    this.errorMessage = <any>error;

                    if(this.errorMessage!==null){
                        console.log(this.errorMessage);
                        alert("Error en la petición");
                    }
                }
            );
         });

        
        
    }

    callPrecio(value){
        this.restaurante.precio = value;
    }

    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>>fileInput.target.files;
        console.log("fileChangeEvent");
        this.makeFileRequest("http://localhost:8888/api-rest/restaurantes-api.php/upload-file", [], this.filesToUpload)
        .then((result) => {
            this.resultUpload = result;
            this.restaurante.imagen = this.resultUpload.filename;
            console.log(this.resultUpload);
        }, (error) => {
            console.log(error);
        });
    }

    makeFileRequest(url: string, params: Array<string>, files: Array<File>){
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();

            for(var i = 0; i < files.length; i++){
                formData.append("uploads[]", files[i], files[i].name);
            }

            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4){
                    if(xhr.status == 200){
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    }
}