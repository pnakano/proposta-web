import { Routes } from '@angular/router';
import { ListaComponent } from './modules/proposta-financeira/components/lista/lista.component';
import { CadastroComponent } from './modules/proposta-financeira/components/cadastro/cadastro.component';

export const routes: Routes = [
  { path: '', redirectTo: 'propostas', pathMatch: 'full' },
  { path: 'propostas', component: ListaComponent },
  { path: 'propostas/cadastro', component: CadastroComponent },
];
