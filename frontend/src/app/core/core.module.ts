import { AuthGuardService } from './auth-guard/auth-guard.service';
import { HttpInterceptorProvider } from './http-interceptors';
import { LOCALE_ID, NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';

@NgModule({
  providers: [
    AuthGuardService,
    ...HttpInterceptorProvider,
    { provide: LOCALE_ID, useValue: 'pt-br' },
  ],
  imports: [
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('TOKEN');
        },
      },
    }),
  ],
})
export class CoreModule {}
