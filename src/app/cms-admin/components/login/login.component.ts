import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserInterface } from '../../../cms-shared/interfaces/user.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  formSubmitting = false;
  message = '';

  constructor(
    public authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      if (params.loggedOut) {
        this.message = 'You have been logged out.';
      }
    });

    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(5)
      ])
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return false;
    }
    this.formSubmitting = true;
    const user: UserInterface = {
      email: this.form.value.email,
      password: this.form.value.password,
      returnSecureToken: true
    };
    console.log(this.form);
    console.log(this.form.value);

    this.authService.login(user).subscribe((response) => {
      console.log(response);
      this.form.reset();
      this.router.navigate(['/admin']);
      this.formSubmitting = false;
    }, () => {
      this.formSubmitting = false;
    });

  }

}
