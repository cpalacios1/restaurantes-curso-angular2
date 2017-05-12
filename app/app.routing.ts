// Importar el núcleo de Angular
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RestaurantesListComponent} from './component/RestaurantesList/restaurantes-list.component';
import {RestauranteDetalleComponent} from './component/RestauranteDetalle/restaurante-detalle.component';
import {RestauranteAgregarComponent} from './component/RestauranteAgregar/restaurante-agregar.component';
import {RestauranteEditarComponent} from './component/RestauranteEditar/restaurante-editar.component';
 
const appRoutes: Routes = [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: '/', component: RestaurantesListComponent},
    {path: '/restaurante/:id', component: RestauranteDetalleComponent},
    {path: '/crear-restaurante', component: RestauranteAgregarComponent},
    {path: '/editar-restaurante/:id', component: RestauranteEditarComponent},
    {path: '/donde-como-hoy/:random', component: RestauranteDetalleComponent}
];

export const appRoutingProviders : any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);