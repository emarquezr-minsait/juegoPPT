import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingame',
  templateUrl: './ingame.component.html',
  styleUrls: ['./ingame.component.css'],
})
export class IngameComponent implements OnInit {
  puntuacion: number = 0;
  mensaje: string = 'Selecciona una tarjeta para comenzar';

  max: number = 3;
  min: number = 1;

  
  //disabledButtons: boolean = false;

  seleccionRobot: string = ''; //para empezar como de vacío

  constructor() {}

  ngOnInit(): void {}

  juego(seleccion: string) {
    /*
  para evitar que esto funcione raro, y que el que juegue no spamee el botón (y que funcione raro)
  hay que bloquear los botones también durante este tiempo
  podemos hacerle un cambio visual además para que sea gráfico el bloqueo
  */
    //RECORDEMOS: 1 piedra 2 papel 3 tijeras
    //console.log(this.disabledButtons)
    //this.creaEstilo();
    this.mensaje = '';
    
    var cont = document.getElementById("cont");
    if(cont != null){
      cont.classList.add('funcion');
    }

    this.mensaje = this.mensaje
      .concat('Has seleccionado ')
      .concat(seleccion)
      .concat('. El ordenador selecciona... ');

    setTimeout(() => {
      var random = Math.floor(
        Math.random() * (this.max - this.min + 1) + this.min
      );
      //console.log(this.seleccionRobot)

      switch (random) {
        case 1:
          this.seleccionRobot = 'piedra';
          break;
        case 2:
          this.seleccionRobot = 'papel';
          break;
        case 3:
          this.seleccionRobot = 'tijeras';
          break;
      }

      if (this.seleccionRobot == seleccion) {
        //this.puntuacion--;
        this.mensaje = this.mensaje
          .concat(this.seleccionRobot)
          .concat('. Empate');
      } else if (
        (this.seleccionRobot == 'piedra' && seleccion == 'tijeras') ||
        (this.seleccionRobot == 'papel' && seleccion == 'piedra') ||
        (this.seleccionRobot == 'tijeras' && seleccion == 'papel')
      ) {
        this.puntuacion--;
        this.mensaje = this.mensaje
          .concat(this.seleccionRobot)
          .concat('. Pierdes');
      } else if (
        (this.seleccionRobot == 'tijeras' && seleccion == 'piedra') ||
        (this.seleccionRobot == 'piedra' && seleccion == 'papel') ||
        (this.seleccionRobot == 'papel' && seleccion == 'tijeras')
      ) {
        this.puntuacion++;
        this.mensaje = this.mensaje
          .concat(this.seleccionRobot)
          .concat('. Ganas');
      }
    //this.quitaEstilo();


    if(cont != null){
      cont.classList.remove('funcion');
    }
    }, 1000);

    //opcion.classList.remove('funcion');
    //this.disabledButtons = false;
  }

  // creaEstilo(){
  //   var sheet = document.createElement('style')
  //   sheet.innerHTML = ".opcion {pointer-events: none;}";
  //   document.body.appendChild(sheet);
  // }

  // quitaEstilo(){
  //   var sheetToBeRemoved = document.getElementsByName('sheet')
  //   var sheetParent = sheetToBeRemoved.parentNode;
  //   sheetParent.removeChild(sheetToBeRemoved);
  // }
}
//settimeout con observadores