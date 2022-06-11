import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//Rutas
import { AppRoutingModule } from './app-routing.module';

//Modulos personalizados
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UsuariosModule } from './usuarios/usuarios.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { appReducers } from './app.reducers';
import { environment } from '../environments/environment';
import { Effectsarray } from './store/effects/index';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    UsuariosModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(Effectsarray),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      // autoPause: true,
      // features: {
      //   pause: false,
      //   lock: true,
      //   persist: true
      // }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
