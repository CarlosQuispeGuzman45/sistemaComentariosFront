import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Comentario } from '../models/comentario';


@Injectable({
  providedIn: 'root'
})
export class ComentariosService {
  private baseUrl = 'http://localhost:8080/api/v2/comentarios';
  private listaCambio = new Subject<Comentario[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }

  getComentarios(): Observable<any> {
    return this.http.get<Comentario[]>(this.baseUrl + "/comentariosanidados");
  }

  setComentario(comentario: Comentario) {
    return this.http.post(this.baseUrl, comentario);
  }

  deleteComentario(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  setResponderComentario(idComentarioPadre: number,comentarioRespuesta:Comentario) {
    return this.http.post(`${this.baseUrl}/${idComentarioPadre}/responder`,comentarioRespuesta);
  }

  setLista(listaNueva: Comentario[]) {
    this.listaCambio.next(listaNueva);
  }

  getLista() {
    return this.listaCambio.asObservable();
  }

  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }

  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }

  listarId(id: number) {
    return this.http.get<Comentario>(`${this.baseUrl}/${id}`);
  }



}
