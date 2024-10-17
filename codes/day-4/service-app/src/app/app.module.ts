import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { AnotherComponent } from './another/another.component';
import { TitleService } from './services/title.service';
import { AlternateDataService } from './services/alternate-data.service';

@NgModule({
  declarations: [
    AppComponent,
    AnotherComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: 'DATA_SERVICE',
      useClass: DataService
    },
    // {
    //   provide: TitleService,
    //   useClass: TitleService
    // }
    //DataService,
    TitleService
  ],

  //if you have used
  //{providedIn:'root'} while defining DataService, then no need to again register the DataService
  //providers: [TitleService],

  bootstrap: [AppComponent]
})
export class AppModule { }
