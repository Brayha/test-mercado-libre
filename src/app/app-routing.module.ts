import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultComponent } from './search-result/search-result.component';
import { DetailSearchComponent } from './shared/components/detail-search/detail-search.component';

const routes: Routes = [
    { path: 'items', component: SearchResultComponent },
    { path: 'items/:id', component: DetailSearchComponent },
    { path: '', component: SearchResultComponent },//TODO: Crear componente vacío
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
