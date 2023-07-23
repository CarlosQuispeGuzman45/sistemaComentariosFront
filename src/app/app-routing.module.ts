import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComentariosComponent } from './components/comentarios/lista-comentarios/lista-comentarios.component';
import { InsertarComentarioComponent } from './components/comentarios/insertar-comentario/insertar-comentario.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';

const routes: Routes = [
  {
    path: 'comentario', component: ComentariosComponent, children: [
      { path: 'nuevo', component: InsertarComentarioComponent },
      { path: 'responder/:id', component: InsertarComentarioComponent },
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
