import { Injectable } from '@angular/core';
import { Profesor } from '../models/profesor';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {
  private baseUrl = 'http://localhost:8080/api/v2/profesor';
  private listaCambio = new Subject<Profesor[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }

  getProfesores(): Observable<any> {
    return this.http.get<Profesor[]>(this.baseUrl);
  }

  setProfesor(profesor: Profesor) {
    return this.http.post(this.baseUrl, profesor);
  }

  deleteProfesor(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  setLista(listaNueva: Profesor[]) {
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
    return this.http.get<Profesor>(`${this.baseUrl}/${id}`);
  }



}
