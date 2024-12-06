import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../../models/user';
import { Subscription } from 'rxjs';
import { TokenService } from '../../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnDestroy {
  loginForm: FormGroup;
  private userSubscription?: Subscription;

  constructor(
    private userSvc: UserService,
    private tokenSvc: TokenService,
    private router: Router
  ) {
    this.loginForm = new FormGroup(
      {
        username: new FormControl('enter email as username'),
        password: new FormControl('enter password')
      }
    )
  }
  submit() {
    const user = (<User>this.loginForm.value)
    this.userSubscription = this
      .userSvc
      .authenticate(user)
      .subscribe({
        next: (apiResponse) => {
          if (apiResponse.data !== null) {
            this.tokenSvc.saveToken(apiResponse.data)
          } else {
            alert('invalid user')
          }
        },
        error: (err) => {
          alert('error ' + err.message)
        },
        complete: () => {
          this.router.navigate(['/products'])
        }
      })
  }
  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe()
  }
}
