import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThirdComponent } from './third/third.component';
import { ForthComponent } from './forth/forth.component';

@NgModule({
  declarations: [
    AppComponent,
    ThirdComponent,
    ForthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
