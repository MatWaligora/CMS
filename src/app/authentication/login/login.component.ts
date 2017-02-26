import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    form: FormGroup;

    constructor(@Inject(FormBuilder) fb: FormBuilder, private as: AuthService) {
        this.form = fb.group({
            email: '',
            password: ''
        });
    }

    ngOnInit() {
    }

    onSubmit(): void {
        this.as.signIn(this.form.value);
    }

}
