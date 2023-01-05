import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SesionesModule } from './sesiones/sesiones.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SesionesModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
