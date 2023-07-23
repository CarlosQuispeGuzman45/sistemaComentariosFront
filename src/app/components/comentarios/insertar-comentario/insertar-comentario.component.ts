import { Comentario } from './../../../models/comentario';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ComentariosService } from 'src/app/services/comentarios.service';
import { format } from 'date-fns';


@Component({
  selector: 'app-insertar-comentario',
  templateUrl: './insertar-comentario.component.html',
  styleUrls: ['./insertar-comentario.component.css']
})
export class InsertarComentarioComponent implements OnInit {
  mensaje: string = "";
  constructor(private comentarioservice: ComentariosService, private router: Router, private route: ActivatedRoute) { }
  comentario: Comentario = new Comentario();
  responder: boolean = false;
  id: number = 0;
  ComentarioPadre: Comentario = new Comentario();
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.responder = data['id'] != null;
      this.init();
    });
  }

  aceptar(): void {
    if (this.comentario.contenido.length > 0) {

      if (this.responder) {
        const fechaActual = format(new Date(), 'dd/MM/yyyy HH:mm');
        this.comentario.fecha = fechaActual;
        this.comentarioservice.setResponderComentario(this.ComentarioPadre.id, this.comentario).subscribe(data => {
          this.comentarioservice.getComentarios().subscribe(data => {
            this.comentarioservice.setLista(data);
          })
        })
      } else {

        const fechaActual = format(new Date(), 'dd/MM/yyyy HH:mm');
        this.comentario.fecha = fechaActual;
        this.comentarioservice.setComentario(this.comentario).subscribe(data => {
          this.comentarioservice.getComentarios().subscribe(data => {
            this.comentarioservice.setLista(data);
          })
        }
          // (response) => {
          //   console.log('Inserción exitosa:', response);
          // },
          // (error) => {
          //   console.error('Error al insertar:', error);
          // }

        )
      }


      this.router.navigate(['/comentario']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
  init() {
    if (this.responder) {
      this.comentarioservice.listarId(this.id).subscribe(data => {
        this.ComentarioPadre = data;
      })
    }

  }
}
