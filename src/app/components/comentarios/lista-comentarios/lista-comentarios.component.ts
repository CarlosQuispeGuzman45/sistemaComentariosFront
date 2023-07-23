import { Component, Input, OnInit, Output } from '@angular/core';
import { Comentario } from 'src/app/models/comentario';
import { ComentariosService } from 'src/app/services/comentarios.service';

@Component({
  selector: 'app-lista-comentarios',
  templateUrl: './lista-comentarios.component.html',
  styleUrls: ['./lista-comentarios.component.css']
})
export class ListaComentariosComponent implements OnInit {
  @Input() comentarios: Comentario[] = [];
  constructor(private comentariosService: ComentariosService) { }

  ngOnInit(): void {
    this.obtenerComentarios();

    this.comentariosService.getLista().subscribe(data => {
      this.comentarios = data;
    });
  }


  obtenerComentarios(): void {
    this.comentariosService.getComentarios().subscribe(
      (data) => {
        this.comentarios = data;
        console.log(data); // Verifica que recibes los datos correctamente.
      },
      (error) => {
        console.error(error);
      }
    );
  }

 

}
