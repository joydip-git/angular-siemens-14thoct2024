import { NgModule } from '@angular/core';
import { SampleComponent } from './components/sample/sample.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SampleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SampleComponent]
})
export class OtherModule { }
