import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  public usuario : Usuario

  constructor(private router: Router,
              private usuarioService:UsuarioService) {
                                                  // el imagenUrl como es un get no necesita los parentesis ()
                this.usuario = this.usuarioService.usuario

              }

  ngOnInit(): void {}

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  logout() {
    this.usuarioService.logout()
    this.router.navigateByUrl('/auth/login')
  }
}
