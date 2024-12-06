import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';

const userRoutes: Routes = [
  {
    path: 'user',
    children: [
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'register', component: RegistrationComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  providers: [UserService]
})
export class UsersModule { }
