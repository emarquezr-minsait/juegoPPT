import { Component, OnInit } from '@angular/core';
import { GameService, User } from 'src/app/servicios/game.service';
//import { IngameComponent } from '../ingame/ingame.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
})
export class AddUserComponent implements OnInit {
  usuario: User;

  mensajeUsuarioExiste: string = 'Este usuario ya existe';
  usuarioExiste: boolean = false; //el valor del booleano tiene el sentido contrario del que se le supone por sentido común, pero para controlar la lógica lo pongo así

  mensajeVacio: string = 'Este campo no puede estar vacío';
  campoVacio: boolean = false;

  constructor(private _gameService: GameService, private router: Router) {
    this.usuario = { nombre: '', max_puntuacion: 0 };
  }

  ngOnInit(): void {}

  crearUsuario(nombre: string) {
    this.campoVacio=false;
    if (nombre === '') {
      this.campoVacio = true;
    } else {
      this.usuario = this._gameService.createUser(nombre); //esto nos retorna el usuario si lo hemos agregado bien
      if (this.usuario.nombre == 'usuarioExiste') {
        this.usuarioExiste = true;
      } else {
        this.router.navigate(['/in-game', this.usuario]); //que redirija a la pag con el nombre del chaval
      }
    }
  }
}
