import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SetTimeModule } from './pages/set-time/set-time.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SetTimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
