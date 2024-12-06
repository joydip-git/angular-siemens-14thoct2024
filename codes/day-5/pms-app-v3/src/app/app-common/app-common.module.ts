import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';

const commonRoutes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    DashBoardComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(commonRoutes)
  ],
  exports: [DashBoardComponent]
})
export class AppCommonModule { }
