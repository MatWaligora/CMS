import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {PreventGuard} from "./prevent-guard.service";

const routes: Routes = [
    {path: 'login', component: LoginComponent, canActivate: [PreventGuard]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class LoginRoutingModule { }
