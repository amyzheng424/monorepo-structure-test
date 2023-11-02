import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
// import { AuthService } from 'projects/guards-demo/src/app/services/auth/auth.service';
// import { OidcSecurityService, LoginResponse } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-portal-dashboard',
  templateUrl: './portal-dashboard.component.html',
  styleUrls: ['./portal-dashboard.component.scss'],
})
export class PortalDashboardComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService // private oidcSecurityService: OidcSecurityService
  ) {}
  ngOnInit(): void {
    // this.oidcSecurityService
    //   .checkAuth()
    //   .subscribe((loginResponse: LoginResponse) => {
    //     const { isAuthenticated, userData, accessToken, idToken, configId } =
    //       loginResponse;
    //     console.log(
    //       'PortalDashboard >> ngOnInit >> loginResponse::',
    //       loginResponse
    //     );
    //     /*...*/
    //   });
  }

  logout(): void {
    this.authService.logout();
  }
}
