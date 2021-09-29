import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";

import { RegisterForm } from '../interfaces/register-form.interface';
import { environment } from 'src/environments/environment';
import { LoginForm } from '../interfaces/login-form.interface';
import { Usuario } from '../models/usuario.model';

const api_url = environment.apiUrl

declare const gapi:any


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public auth2 :any
  public usuario : Usuario;

  constructor( private http:HttpClient ) { 
    
  }

  validarToken() : Observable<boolean> {
    const token = localStorage.getItem('token') || '';

    return this.http.get( `${ api_url }/login/renew`, {
      headers : {
        'x-token': token
      }
    }).pipe(
      tap( (resp : any) =>{
        console.log(resp);
        const {  email, google, nombre, role, uid, img }  = resp.usuario;

        this.usuario = new Usuario(nombre, email, '', role, google, img, uid)
        localStorage.setItem('token', resp.token)
      } ), //necesitamos pasar la respuesta a un valor booleano
      map( resp => true  ),
      catchError( error => of(false) )
    )
  }

  crearUsuario( formData : RegisterForm ){

    return this.http.post( `${ api_url }/usuarios`, formData )
    // grabar en el localStorage, utilizamos el pipe para ello
    .pipe(
      tap( (resp : any) =>{
        console.log(resp);
        localStorage.setItem('token', resp.token)
      } )
    )
    
  }

  loginForm( formData : LoginForm ){
    
    return this.http.post( `${ api_url }/login`, formData )
      // grabar en el localStorage, utilizamos el pipe para ello
          .pipe(
            tap( (resp : any) =>{
              console.log(resp);
              localStorage.setItem('token', resp.token)
            } )
          )
  }

  loginGoogle( token ){
                                                  // lo mandamos entre llaves porque es un objeto
    return this.http.post( `${ api_url }/login/google`, {token} )
      // grabar en el localStorage, utilizamos el pipe para ello
          .pipe(
            tap( (resp : any) =>{
              console.log(resp);
              localStorage.setItem('token', resp.token)
            } )
          )
  }

  

  logout() {
    localStorage.removeItem('token')
  
    
    
  }
}
