import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeRoutingModule } from './modules/home/home-routing.module';
import { PaginaNaoEncontradaComponent } from './modules/app-layout/components/pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'app/home' },
  { path: 'app', loadChildren: 'app/modules/app-layout/app-layout.module#AppLayoutModule' },

  { path: '**', pathMatch: 'full', component: PaginaNaoEncontradaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [PaginaNaoEncontradaComponent]
})
export class AppRoutingModule { }
