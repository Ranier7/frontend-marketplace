import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ComprasComponent } from './compras/compras.component';

const routes: Routes = [
  { path: 'clientes', component: ClientesComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'compras', component: ComprasComponent },
  { path: '', redirectTo: '/clientes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
