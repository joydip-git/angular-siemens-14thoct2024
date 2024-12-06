import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../../models/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnDestroy {
  loginForm: FormGroup;
  private userSubscription?: Subscription;

  constructor(
    private builder: FormBuilder,
    private userSvc: UserService
  ) {
    this.loginForm = this.builder.group({
      username: ['enter email as username'],
      password: ['enter password']
    })
  }
  submit() {
    const user = (<User>this.loginForm.value)
    this.userSubscription = this.userSvc
      .authenticate(user)
      .subscribe({
        next: () => {

        },
        error: () => {

        },
        complete: () => {

        }
      })
  }
  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe()
  }
}
