import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CarroListarComponent} from "./pages/carro/carro-listar/carro-listar-component";
import {CarroEditarComponent} from "./pages/carro/carro-editar/carro-editar-component";
import {CarroCadastrarComponent} from "./pages/carro/carro-cadastrar/carro-cadastrar.component";
import {PecaListarComponent} from "./pages/peca/peca-listar/peca-listar.component";
import {PecaCadastrarComponent} from "./pages/peca/peca-cadastrar/peca-cadastrar.component";


export const routes: Routes = [

  {
    path: "pages/carro/listar",
    component: CarroListarComponent,
  },

  { path: 'pages/carro/editar/:id',
    component: CarroEditarComponent },

  { path: 'pages/carro/cadastrar',
    component: CarroCadastrarComponent },

  { path: 'pages/peca/listar',
    component: PecaListarComponent },

  { path: 'pages/peca/cadastrar',
    component: PecaCadastrarComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
