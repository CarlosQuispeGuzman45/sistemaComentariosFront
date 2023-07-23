import { Comentario } from './../../../models/comentario';
import { ComentariosService } from 'src/app/services/comentarios.service';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogoComponent } from '../lista-comentarios/dialogo/dialogo.component';

@Component({
  selector: 'app-comentario-anidado',
  templateUrl: './comentario-anidado.component.html',
  styleUrls: ['./comentario-anidado.component.css']
})
export class ComentarioAnidadoComponent implements OnInit {
  @Input() comentario!: Comentario;
  private idMayor: number = 0;
  comentarioPadre: Comentario = new Comentario();
  constructor(private comentarioService: ComentariosService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.comentarioService.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminarComentario(this.idMayor) : false;
    });

    this.comentarioService.listarId(this.comentario.id_padre).subscribe(data => {
      this.comentarioPadre = data;
    })
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(DialogoComponent);
  }

  eliminarComentario(id: number) {
    this.comentarioService.deleteComentario(id).subscribe(() => {
      this.comentarioService.getComentarios().subscribe(data => {
        this.comentarioService.setLista(data);
      })
    });
    console.log(`Eliminando comentario con ID ${id}`);
  }
}
