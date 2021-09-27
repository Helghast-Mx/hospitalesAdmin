import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import Swal from 'sweetalert2'

import { UsuarioService } from '../../services/usuario.service';

declare const gapi:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public auth2 : any;
  public zone: NgZone

  loginForm : FormGroup = this.fb.group({
    email : [localStorage.getItem('email') || '' , [Validators.required, Validators.email]],
    password : ['', [Validators.required, Validators.minLength(6)]],
    remember : [false]
    
  })

  constructor( private fb : FormBuilder,
               private router: Router,
               private usuarioService : UsuarioService,
               private ngZone: NgZone ) { }

  ngOnInit(): void {
    this.renderButton();
  }

  login(){
    this.usuarioService.loginForm( this.loginForm.value )
    .subscribe(resp => {

        // si queremos que guarde en el localStorage
      if(this.loginForm.get('remember').value){
        localStorage.setItem('email', this.loginForm.get('email').value)
      } else { // si NO queremos que guarde en el localStorage
        localStorage.removeItem('email')
      }
      // navega al dashboard
      this.router.navigateByUrl('/');
      
    }, (err)=>{
      Swal.fire( 'error', err.error.msg, 'error' )
    })
  }
  // 
 

  renderButton() {
    gapi.signin2.render('my-signin2', {
      
      'width': 240,
      'height': 50,
    });
    this.startApp()
  }

  startApp() {
    gapi.load('auth2', ()=>{
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      this.auth2 = gapi.auth2.init({
        client_id: '713970374069-4lkdada666clhgp05pcjbaa5o9pkkke1.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        // Request scopes in addition to 'profile' and 'email'
        //scope: 'additional_scope'
      });
      this.attachSignin(document.getElementById('my-signin2'));
    });
  };

  attachSignin(element) {
    this.auth2.attachClickHandler( element, {},
        (googleUser)=> {
          const id_token = googleUser.getAuthResponse().id_token;
          
          this.usuarioService.loginGoogle( id_token )
          .subscribe( resp =>{
            this.ngZone.run(()=> {
              this.router.navigateByUrl('/');
            })
          } );

          // navega al dashboard
          

        }, (error)=> {
          alert(JSON.stringify(error, undefined, 2));
        });
  }

}
