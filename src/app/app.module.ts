import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapBoxComponent } from './components/map-box.component';
import { MapboxService } from './services/mapbox.service';


@NgModule({
  declarations: [
    AppComponent,
    MapBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MapboxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
