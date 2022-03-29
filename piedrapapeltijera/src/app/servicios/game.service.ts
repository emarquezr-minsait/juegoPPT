import { Injectable } from "@angular/core";

@Injectable()
export class GameService{

private users:User[] =
    [
        {nombre: "Antonio",
        max_puntuacion: 10},

        {nombre: "Joseluigi",
        max_puntuacion: 4}
    ]

    constructor(){
        //console.log(this.users[0].nombre);
    }

    getUser(nombreEntrada:string){
        //var user:User[] = [];
        for (let u of this.users){
            if (u.nombre === nombreEntrada){
                return u;
            }
        }
        return({nombre: 'noValido', max_puntuacion: 0})
    }

    createUser(nombreEntrada:string){
        for (let u of this.users){
            if (u.nombre === nombreEntrada){
                /*
                volver a la pantalla de inicio o mostrar por pantalla un error, ver cómo hacemos esto
                igual poner una condición lógica para mostrar un h1 en el html o algo así
                */
                return({nombre: 'usuarioExiste', max_puntuacion: 0})//nada, le retornamos un usuario no válido (porque ya existe)
            }
        }
        this.users.push({nombre: nombreEntrada, max_puntuacion: 0})//evidentemente no hay persistencia, pero durante el juego podemos usar a este broc
        return this.users[this.users.length-1]//con esto obtenemos el último elemento, que es el usuario recién creado
    }

}

export interface User{
    nombre:string;
    max_puntuacion:number
};