import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LibSimpleComponent } from 'lib-simple';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LibSimpleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
