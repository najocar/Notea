import { Component, inject } from '@angular/core';
import { LoginService } from './services/login.service';
import { Route, Router } from '@angular/router';
import { Observable, filter, fromEvent, map, mapTo, merge, of, startWith } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  router = inject(Router);
  

  title = 'Notea';
  public src: string = '';
  public isloged: boolean = false;
  public authParams?: any;

  deslog() {
    this.loginS.loggedIn = false;
    sessionStorage.removeItem('user');
    this.loginS.singOut;
    this.router.navigateByUrl('/RefrshComponent', { skipLocationChange: true }).then(() => this.router.navigate(["/"]));
  }

  constructor(private loginS: LoginService) { }

  ngOnInit(){
    // const message$ = fromEvent<StorageEvent>(window, "storage").pipe(
    //   filter(event => event.storageArea === sessionStorage),
    //   filter(event => event.key === "user"),
    //   map(event => event.newValue)
    // );
    
  }

  //intervalID = setInterval(this.myCallback, 5000);

  // myCallback() {
  //   console.log(this.elementoPresente$.subscribe);
  // }



  //  constructor(private authService: SocialAuthService
  //    ,private loginS: LoginService){}

  // ngOnInit() {

  //   this.authParams = this.loginS;
  //   //this.loginS.getSrc
  //   //this.src = await this.loginS.getSrc;
  //   //console.log(this.esperarSrc())
  //   console.log(this.authParams['photoUrl'])
  //   this.src = this.authParams['photoUrl'];
  //   this.isloged = true;

  // }




}
