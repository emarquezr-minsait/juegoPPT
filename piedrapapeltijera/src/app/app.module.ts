import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { APP_ROUTING } from './app.routes';

import { GameService } from './servicios/game.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { IngameComponent } from './components/ingame/ingame.component';
import { AddUserComponent } from './components/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IngameComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
