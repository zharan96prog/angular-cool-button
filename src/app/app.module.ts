import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoolButtonModule } from './cool-button/cool-button.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoolButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
