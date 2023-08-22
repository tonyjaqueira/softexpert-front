import { PedidosComponent } from './pedidos/pedidos.component';
import { PrincipalComponent } from './principal/principal/principal.component';
import { TemplateComponent } from './template/template.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path: '', component: TemplateComponent, children: [
  {path: '', redirectTo: 'principal', pathMatch: 'full'},
  {path: 'principal', component: PrincipalComponent},
  {path: 'pedidos', component: PedidosComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
