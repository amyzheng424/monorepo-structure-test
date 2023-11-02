import { Component, OnInit } from '@angular/core';
// import { OidcSecurityService, LoginResponse } from 'angular-auth-oidc-client';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // constructor(private oidcSecurityService: OidcSecurityService) {}

  ngOnInit(): void {
    // this.oidcSecurityService
    //   .checkAuth()
    //   .subscribe((loginResponse: LoginResponse) => {
    //     const { isAuthenticated, userData, accessToken, idToken, configId } =
    //       loginResponse;
    //     console.log(
    //       'App Component >> ngOnInit >> loginResponse::',
    //       loginResponse
    //     );
    //     /*...*/
    //   });
  }
  title = 'guards-demo';
}
