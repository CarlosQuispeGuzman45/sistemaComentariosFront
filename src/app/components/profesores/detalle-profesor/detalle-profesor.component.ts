import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Profesor } from 'src/app/models/profesor';
import { ProfesoresService } from 'src/app/services/profesores.service';

@Component({
  selector: 'app-detalle-profesor',
  templateUrl: './detalle-profesor.component.html',
  styleUrls: ['./detalle-profesor.component.css']
})
export class DetalleProfesorComponent implements OnInit {

  profesor: Profesor = new Profesor();
  id: number = 0;
  constructor(private profesorService: ProfesoresService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.Init();
    })
  }

  Init(){
    this.profesorService.listarId(this.id).subscribe(data => {
      this.profesor = data;
    })
  }

}
