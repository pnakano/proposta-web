import { Routes } from '@angular/router';
import { ListComponent } from './modules/proposta-financeira/components/list/list.component';
import { CrudComponent } from './modules/proposta-financeira/components/crud/crud.component';

export const routes: Routes = [
  { path: '', redirectTo: 'propostas', pathMatch: 'full' },
  { path: 'propostas', component: ListComponent },
  { path: 'propostas/cadastro', component: CrudComponent },
];
