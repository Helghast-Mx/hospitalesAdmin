import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioInterface } from '../interfaces/usuario.interface';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public data : UsuarioInterface
  current = 0;

  index = 'First-content';

  constructor( private usuarioService : UsuarioService ) {
      this.data = this.usuarioService.usuario
      console.log(this.data);
      
   }

  ngOnInit(): void {
  }




}
