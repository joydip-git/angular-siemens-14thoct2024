import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { AnotherComponent } from './another/another.component';
import { TitleService } from './services/title.service';

@NgModule({
  declarations: [
    AppComponent,
    AnotherComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService, TitleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
