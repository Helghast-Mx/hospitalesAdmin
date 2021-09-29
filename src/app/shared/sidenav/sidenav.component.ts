import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  public usuario : Usuario;

  constructor(
              private usuarioService : UsuarioService
  ) {
    this.usuario = this.usuarioService.usuario
   }

  ngOnInit(): void {
  }

}
