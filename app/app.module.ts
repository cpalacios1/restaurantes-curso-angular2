import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpModule, JsonpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {routing, appRoutingProviders} from './app.routing';


import {RestaurantesListComponent} from './component/RestaurantesList/restaurantes-list.component';
import {RestauranteDetalleComponent} from './component/RestauranteDetalle/restaurante-detalle.component';
import {RestauranteAgregarComponent} from './component/RestauranteAgregar/restaurante-agregar.component';
import {RestauranteEditarComponent} from './component/RestauranteEditar/restaurante-editar.component';

@NgModule({
    imports: [BrowserModule, HttpModule, JsonpModule, FormsModule, routing],
    declarations: [ AppComponent, 
                    RestaurantesListComponent, 
                    RestauranteDetalleComponent, 
                    RestauranteAgregarComponent, 
                    RestauranteEditarComponent],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})

export class AppModule {}