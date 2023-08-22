import { TemplateComponent } from './modules/pages/template/template.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './modules/pages/principal/principal/principal.component';

const routes: Routes = [
    {path: '', redirectTo: 'pages/home', pathMatch: 'full'},
    {path: '', component: TemplateComponent},
    {path: 'home', component: PrincipalComponent},
    {path: 'pages', loadChildren: () => import('./modules/pages/pages.module').then(m => m.PagesModule)}
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
