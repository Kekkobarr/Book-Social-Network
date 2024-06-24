import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'src/app/services/keycloak/keycloak.service';
import { AuthenticationRequest } from 'src/app/services/models/authentication-request';
import { AuthenticationService } from 'src/app/services/services/authentication.service';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

constructor(private keycloakService: KeycloakService) {}

async ngOnInit(): Promise<void> {
  await this.keycloakService.init();
  await this.keycloakService.login();
}

/*   authRequest: AuthenticationRequest = {email:'', password:''};
  errorMsg: Array<string> = [];

  constructor(private router: Router, private authService: AuthenticationService, private tokenService: TokenService){

  }

  login():void | undefined{
    this.errorMsg = [];
    this.authService.authenticate({body: this.authRequest
      }).subscribe({
        next:(res) => {
        this.tokenService.token = res.token as string
        this.router.navigate(['books'])
      },
      error: (err) => {
        console.log(err);
        if(err.error.validationErrors){
          this.errorMsg = err.error.validationErrors
        } else{
          this.errorMsg.push(err.error.error);
        }
      }
    })
  }

  register():void | undefined{
    this.router.navigate(['register'])
  } */

}
