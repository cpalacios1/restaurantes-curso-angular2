import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
 
@Component({
    selector: 'my-app',
    templateUrl: "app/view/restaurantes.html"
})

// Clase del componente donde iran los datos y funcionalidades
export class AppComponent {
   public tituloComponente:string = "Restaurantes";
}