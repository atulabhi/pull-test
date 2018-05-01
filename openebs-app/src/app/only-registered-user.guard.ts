import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot , Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HangoutService } from './hangout.service';

@Injectable()
export class OnlyRegisteredUserGuard implements CanActivate {

  constructor( public hangoutService : HangoutService , public router : Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // if(!this.hangoutService.isAuthenticated()) {
      //   this.router.navigate(['hangout']);
      //   return false;
      // }
      return true;
      
  }

}
