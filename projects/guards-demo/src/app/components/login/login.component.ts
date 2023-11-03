import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from '../../services/auth/auth.service';
import { AuthService } from '@auth0/auth0-angular';
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
  ngOnInit(): void {
    // Automatically redirect to Auth0 Universal Login
    this.authService.loginWithRedirect({ appState: { target: '/portal' } });
  }

  // login(): void {
  //   console.log("Try to Login'");
  //   this.authService.loginWithRedirect({ appState: { target: '/portal' } });
  // }
}
