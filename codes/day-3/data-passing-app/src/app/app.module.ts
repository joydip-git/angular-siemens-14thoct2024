import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FirstNestedComponent } from './first-nested/first-nested.component';
import { SecondNestedComponent } from './second-nested/second-nested.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstNestedComponent,
    SecondNestedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
