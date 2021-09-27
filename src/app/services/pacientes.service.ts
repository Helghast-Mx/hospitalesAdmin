import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { DataPacientes } from '../pages/interfaces/pacientes.interface';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  private apiUrl : string = environment.apiUrl
  public pacienteSelecc : DataPacientes [] = []

  constructor( private http : HttpClient ) { }

  getPacientes(): Observable<DataPacientes[]>{
    return this.http.get<DataPacientes[]>(`${ this.apiUrl }/pacientes`);
  }

  getPacientePorId( id:string ) : Observable<DataPacientes>{
    return this.http.get<DataPacientes>(`${this.apiUrl}/pacientes/${ id }`)
  }

}
