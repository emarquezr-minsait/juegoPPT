import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IngameComponent } from './components/ingame/ingame.component';
import { AddUserComponent } from './components/add-user/add-user.component';



const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'in-game', component: IngameComponent},//quizás esto no haya que ponerlo porque si no puedes acceder al juego poniendo eso en el buscador y ya
    {path: 'add-user', component: AddUserComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);