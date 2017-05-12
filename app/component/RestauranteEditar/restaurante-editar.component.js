"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importar el núcleo de Angular
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var restaurante_service_1 = require("../../services/restaurante.service");
var restaurante_1 = require("../../model/restaurante");
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
var RestauranteEditarComponent = (function () {
    function RestauranteEditarComponent(_route, _router, _restauranteService) {
        this._route = _route;
        this._router = _router;
        this._restauranteService = _restauranteService;
        this.tituloComponente = "Editar restaurante";
    }
    RestauranteEditarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            _this.restaurante = new restaurante_1.Restaurante(0, "null", "null", "null", "", "bajo");
            _this.id = params["id"];
            if (_this.id !== null) {
                console.log("Carga restaurante");
                _this.getRestaurante();
            }
            console.log("ComponenteAgregar cargado");
        });
    };
    RestauranteEditarComponent.prototype.getRestaurante = function () {
        var _this = this;
        this._restauranteService.getRestaurante(this.id)
            .subscribe(function (Response) {
            _this.restaurante = Response.data;
            _this.status = Response.status;
            if (_this.status !== "success") {
                //alert("Error en el servidor");
                _this._router.navigate(['/']);
            }
            _this.loading = 'hide';
            console.log(_this.restaurante);
            /*box_restaurantes.style.display = "none";*/
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage !== null) {
                console.log(_this.errorMessage);
                alert("Error en la petición");
            }
        });
    };
    RestauranteEditarComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.restaurante);
        this._route.params.forEach(function (params) {
            _this._restauranteService.editRestaurante(_this.id, _this.restaurante)
                .subscribe(function (response) {
                _this.status = response.status;
                if (_this.status !== "success") {
                    alert("Error en el servidor");
                }
                else {
                    console.log("Restaurante credo con éxito");
                    _this._router.navigate(["/"]);
                }
            }, function (error) {
                _this.errorMessage = error;
                if (_this.errorMessage !== null) {
                    console.log(_this.errorMessage);
                    alert("Error en la petición");
                }
            });
        });
    };
    RestauranteEditarComponent.prototype.callPrecio = function (value) {
        this.restaurante.precio = value;
    };
    RestauranteEditarComponent.prototype.fileChangeEvent = function (fileInput) {
        var _this = this;
        this.filesToUpload = fileInput.target.files;
        console.log("fileChangeEvent");
        this.makeFileRequest("http://localhost:8888/api-rest/restaurantes-api.php/upload-file", [], this.filesToUpload)
            .then(function (result) {
            _this.resultUpload = result;
            _this.restaurante.imagen = _this.resultUpload.filename;
            console.log(_this.resultUpload);
        }, function (error) {
            console.log(error);
        });
    };
    RestauranteEditarComponent.prototype.makeFileRequest = function (url, params, files) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    };
    return RestauranteEditarComponent;
}());
RestauranteEditarComponent = __decorate([
    core_1.Component({
        selector: 'restaurante-editar',
        templateUrl: "app/view/restaurante-agregar.html",
        providers: [restaurante_service_1.RestauranteService]
    })
    // Clase del componente donde iran los datos y funcionalidades
    ,
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, restaurante_service_1.RestauranteService])
], RestauranteEditarComponent);
exports.RestauranteEditarComponent = RestauranteEditarComponent;
//# sourceMappingURL=restaurante-editar.component.js.map