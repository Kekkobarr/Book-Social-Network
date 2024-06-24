import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../token/token.service';
import { KeycloakService } from '../keycloak/keycloak.service';

export const authGuard: CanActivateFn = (route, state) => {
  /* const tokenService = inject(TokenService);
  const router = inject(Router);
  if(tokenService.isTokenNotValid()){
    router.navigate(['login']);
    return false;
  }
  return true; */

  const keycloakService = inject(KeycloakService);
  const router = inject(Router);
  if(keycloakService.keycloak?.isTokenExpired()){
    router.navigate(['login']);
    return false;
  }
  return true;
};
