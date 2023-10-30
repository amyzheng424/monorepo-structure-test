import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  isLoginFailed: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}
  ngOnInit(): void {}

  login(): void {
    console.log("Try to Login'");
    this.authService.login();

    //Todo:  start OAuth flow for validation
    // this.authService
    //   .login({ username: this.username, password: this.password })
    //   .subscribe((user) => {
    //     if (user) {
    //       const { name, email } = user;
    //       console.log(`name: ${name}, email: ${email}`);
    //       this.router.navigate(['portal']);
    //     } else {
    //       this.isLoginFailed = true;
    //     }
    //   });
  }
}
