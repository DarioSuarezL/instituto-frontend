import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoginService, LoginResponse } from './graphql/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(private readonly loginService: LoginService, private router: Router) { }

  onSubmit():void {
    this.loginService
    .mutate({
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    }).subscribe(({data})=>{
      const loginResponse = data as LoginResponse;
      localStorage.setItem('token', loginResponse.login.token);
      localStorage.setItem('user', JSON.stringify(loginResponse.login.user));
      this.router.navigate(['/dashboard']);
    })
  }

}

