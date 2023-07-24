import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaComentariosComponent } from './components/comentarios/lista-comentarios/lista-comentarios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import { ComentarioAnidadoComponent } from './components/comentarios/comentario-anidado/comentario-anidado.component';
import { InsertarComentarioComponent } from './components/comentarios/insertar-comentario/insertar-comentario.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { DialogoComponent } from './components/comentarios/lista-comentarios/dialogo/dialogo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { ListaProfesoresComponent } from './components/profesores/lista-profesores/lista-profesores.component';
import {MatCardModule} from '@angular/material/card';
import { DetalleProfesorComponent } from './components/profesores/detalle-profesor/detalle-profesor.component';
@NgModule({
  declarations: [
    AppComponent,
    ListaComentariosComponent,
    ComentarioAnidadoComponent,
    InsertarComentarioComponent,
    ComentariosComponent,
    DialogoComponent,
    ProfesoresComponent,
    ListaProfesoresComponent,
    DetalleProfesorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTreeModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
