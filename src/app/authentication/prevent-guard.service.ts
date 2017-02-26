import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AngularFire} from 'angularfire2';
import {Observable} from "rxjs/Observable";

@Injectable()
export class PreventGuard implements CanActivate {
  constructor(private af: AngularFire, private router: Router) {}

  canActivate() {
    return this.af.auth.first()
               .mergeMap(auth => {
                 if(auth) {
                   return Observable.of(false);
                 } else {
                   return Observable.of(true);
                 }
               });
  }
}