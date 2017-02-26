import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AngularFire} from 'angularfire2';
import {Observable} from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private af: AngularFire, private router: Router) {}

  canActivate() {
    return this.af.auth.first()
               .mergeMap(auth => {
      if(!auth) {
        this.router.navigate(['/login']);
        return Observable.of(false);
      } else {
        return Observable.of(true);
      }
    });
  }
}