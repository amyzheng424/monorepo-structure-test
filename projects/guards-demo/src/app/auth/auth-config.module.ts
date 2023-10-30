import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';

@NgModule({
  imports: [
    AuthModule.forRoot({
      config: {
        authority:
          'https://login.microsoftonline.com/0a1f6a03-7a9b-402d-830f-34b054e368e8',
        authWellknownEndpointUrl:
          'https://login.microsoftonline.com/common/v2.0',
        redirectUrl: window.location.origin + '/portal',
        clientId: '0a05c52a-4ef9-4ed1-8566-73d5630f9024',
        scope: 'openid profile offline_access email', // 'openid profile offline_access ' + your scopes
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        maxIdTokenIatOffsetAllowedInSeconds: 600,
        issValidationOff: false,
        autoUserInfo: false,
        customParamsAuthRequest: {
          prompt: 'select_account', // login, consent
        },
      },
    }),
  ],
  exports: [AuthModule],
})
export class AuthConfigModule {}
