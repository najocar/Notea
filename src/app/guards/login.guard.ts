import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const loginS = inject(LoginService);

      //emulating a loggin system -> fake data
      let Login = loginS.isAuth();
      //let Login = true;

      let result=false;
      if(!Login){
        //Not Logged
        if(route.url[0].toString()!='login'){
          //you're not logged?, ---> not alowed --> go login
          loginS.originalPath=route.url[0].toString();
          router.navigate(['/login']);
        }else{
          result=true;
        }
      }else{
        //Logged
        if(route.url[0].toString()=='login'){
          //again in login?, ---> not alowed
          router.navigate(['']);
        }else{
          result=true;
        }
      }
      return result;
};
