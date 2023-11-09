import { Component, inject } from '@angular/core';
import { LoginService } from './services/login.service';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Notea';
  public src:string = '';
  public isloged:boolean = false;
  public authParams?:any;

  // constructor(private authService: SocialAuthService
  //   ,private loginS: LoginService){}

  // ngOnInit(){
  //   this.authService.authState.subscribe(info => {
  //     this.authParams = this.loginS.user;
      
  //     console.log(this.authParams)
  //     console.log(this.authParams['photoUrl'])
  //     this.src = this.authParams['photoUrl'];
  //     this.isloged = true;
  //   })
  // }
  
  
  
  
}
