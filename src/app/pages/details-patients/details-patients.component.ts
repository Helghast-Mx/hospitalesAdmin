import { Component, OnInit } from '@angular/core';
import { PacientesService } from 'src/app/services/pacientes.service';
import { DataPacientes } from '../interfaces/pacientes.interface';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap, tap } from "rxjs/operators";

@Component({
  selector: 'app-details-patients',
  templateUrl: './details-patients.component.html',
  styleUrls: ['./details-patients.component.scss']
})
export class DetailsPatientsComponent implements OnInit {

  paciente : DataPacientes  ;

  constructor( private pacienteService : PacientesService,
               private activatedRoute : ActivatedRoute,
               private router : Router ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({id})=>this.pacienteService.getPacientePorId(id) ))
      .subscribe(heroe => this.paciente = heroe)
    // this.pacienteService.pacienteSelecc.push(this.paciente)
    // console.log(this.paciente);
    
  }

}
