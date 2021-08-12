import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OnfidoComponent } from './onfido/onfido.component';
import { OnfidoService } from './onfido.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    OnfidoComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [OnfidoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
