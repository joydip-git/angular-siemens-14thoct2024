import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';
import { User } from '../../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnDestroy {
  regForm: FormGroup;
  private userSubscription?: Subscription;

  constructor(
    private builder: FormBuilder,
    private userSvc: UserService,
    private router: Router
  ) {
    this.regForm = this.builder.group({
      username: ['enter email as username'],
      password: ['enter password']
    })
  }
  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe()
  }
  submit() {
    const user = (<User>this.regForm.value)
    this.userSubscription = this.userSvc
      .register(user)
      .subscribe({
        next: (apiResponse) => {
          if (apiResponse.data !== null) {
            alert('successfully registered')
          } else {
            alert('error ' + apiResponse.message)
          }
        },
        error: (err) => {
          alert('error ' + err.message)
        },
        complete: () => {
          this.router.navigate(['/user/login']);
        }
      })
  }
}
