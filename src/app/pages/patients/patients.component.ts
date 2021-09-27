import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { DataPacientes } from '../interfaces/pacientes.interface';
import { PacientesService } from '../../services/pacientes.service';



/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry', 'lychee', 'kiwi', 'mango', 'peach', 'lime', 'pomegranate', 'pineapple'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit', 'routeId'];
  dataSource: MatTableDataSource<DataPacientes>;
  clickedRows = new Set<DataPacientes>();
  users : DataPacientes [] = [] ;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( private pacientesService : PacientesService,
               private route: ActivatedRoute,
               private router: Router ) { 
    // Create 100 users
  
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
    
    // console.log('original', users);
    // console.log('desde el servicio', this.users);
    
    // this.dataSource = new MatTableDataSource(users);
    // console.log(this.dataSource);
    
    // Assign the data to the data source for the table to render
  }
  
  ngOnInit(): void {
    console.log('hola OnInit');
    
    this.pacientesService.getPacientes()
    .subscribe( resp=>{
      
      this.users = resp
      this.dataSource = new MatTableDataSource(this.users);
      console.log(this.dataSource);
      
      this.applyPaginator();
     } )
  }
  applyPaginator() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.dataSource.paginator);
  }

  ngAfterViewInit() {
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  expression(even){

    this.pacientesService.pacienteSelecc = even;
    this.router.navigate(['/pages', even.routeId]);
   
    
  }
}

/** Builds and returns a new User. */
  function createNewUser(id: number): DataPacientes {
    const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

    return {
      id: id.toString(),
      name: name,
      progress: Math.round(Math.random() * 100).toString(),
      fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))]
    };
  }
