import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  formSubmitted = false

  miForm : FormGroup = this.fb.group({
    nombre : ['', [Validators.required]],
    email : ['', [Validators.required, Validators.email]],
    password : ['', [Validators.required, Validators.minLength(6)]],
    //password2 : ['', [Validators.required, Validators.minLength(6)]],
  })

  constructor( private fb : FormBuilder,
               private router: Router,
               private usuarioService : UsuarioService ) { }

  ngOnInit(): void {
  }

  registro() {
    this.formSubmitted = true
    console.log(this.miForm.value);

    // formulario invalido
    if( this.miForm.invalid ){
      return
    }
    
    // si el formulario es valido
    this.usuarioService.crearUsuario( this.miForm.value )
    .subscribe( resp => {
      this.router.navigateByUrl('/dashboard');
      
    },( err) =>{
      // si sucede un error
      Swal.fire('Error', err.error.msg, 'error')
    })
  }

  validacionCampos(){



  }

}
