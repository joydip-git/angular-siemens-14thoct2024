import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardComponent } from './components/dash-board/dash-board.component';



@NgModule({
  declarations: [
    DashBoardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [DashBoardComponent]
})
export class AppCommonModule { }
