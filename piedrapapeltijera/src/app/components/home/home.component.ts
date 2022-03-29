import { Component, OnInit } from '@angular/core';
import { GameService, User } from 'src/app/servicios/game.service';
//import { IngameComponent } from '../ingame/ingame.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  usuario: User;

  mensajeVacio: string = 'Este campo no puede estar vacío';
  campoVacio: boolean = false;
  
  mensajeNoValido: string = 'Usuario no válido';
  usuarioNoValido: boolean = false;
  
  constructor(private _gameService: GameService, private router: Router) {
    this.usuario = { nombre: '', max_puntuacion: 0 };
  }

  ngOnInit(): void {}

  //cuestión: no se puede llamar directamente desde el html al servicio game?

  buscaUsuario(nombre: string) {
    this.campoVacio=false;//para resetear si le volvemos a dar a join
    this.usuarioNoValido=false;//para resetear si le volvemos a dar a join
    if (nombre === '') {
      this.campoVacio = true;
    } else {
      this.usuario = this._gameService.getUser(nombre); //esto nos retorna el usuario si lo hemos agregado bien
      if(this.usuario.nombre == 'noValido'){
        this.usuarioNoValido = true;
      }else{
      this.router.navigate(['/in-game', this.usuario]); //que redirija a la pag con el nombre del chaval
      }
    }
  }
}
