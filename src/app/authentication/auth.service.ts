import {EventEmitter, Inject, Injectable} from '@angular/core';
import {AngularFire, AuthMethods, AuthProviders} from 'angularfire2';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
    isLoggedIn: EventEmitter<boolean> = new EventEmitter();
    constructor(private af: AngularFire, private router: Router) {
        this.af.auth.subscribe(auth => {
            this.isLoggedIn.emit(auth ? true : false);
        });
    }

    signIn(credentials) {
        console.log(credentials);
        this.af.auth.login(credentials,
            {
                provider: AuthProviders.Password,
                method: AuthMethods.Password,
            }).then(resp => {
                this.isLoggedIn.emit(true);
                this.router.navigate(['/home']);
        });
    }

    logout() {
        this.af.auth.logout().then(resp => {
            this.isLoggedIn.emit(false);
            this.router.navigate(['/home']);
        });
    }
}
