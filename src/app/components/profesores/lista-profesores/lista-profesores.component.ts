import { Component, OnInit } from '@angular/core';
import { Profesor } from 'src/app/models/profesor';
import { ProfesoresService } from 'src/app/services/profesores.service';

@Component({
  selector: 'app-lista-profesores',
  templateUrl: './lista-profesores.component.html',
  styleUrls: ['./lista-profesores.component.css']
})
export class ListaProfesoresComponent implements OnInit {

  profesores: Profesor[] = [];
  constructor(private profesorService:ProfesoresService) { }

  ngOnInit(): void {
    this.obtenerComentarios();
  }

  obtenerComentarios(): void {
    this.profesorService.getProfesores().subscribe(
      (data) => {
        this.profesores = data;
        console.log(data); // Verifica que recibes los datos correctamente.
      },
      (error) => {
        console.error(error);
      }
    );
  }


}
