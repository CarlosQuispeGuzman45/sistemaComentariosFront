import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ComentariosService } from 'src/app/services/comentarios.service';

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent implements OnInit {

  constructor(private comentarioServise:ComentariosService,private dialogRef:MatDialogRef<DialogoComponent> ) { }

  ngOnInit(): void {
  }

  confirmar(estado: boolean) {
    this.comentarioServise.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
