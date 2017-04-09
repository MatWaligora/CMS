import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {AngularFireModule} from "angularfire2";
import {firebaseConfig} from './angularfire.db';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import {appRouting} from "./app.routes";
import { HeaderComponent } from './landing/header/header.component';
import {LandingModule} from "./landing/landing.module";
import {AboutModule} from "./about/about.module";
import {EntryPostModule} from "./entry-post/entry-post.module";
import { LoginComponent } from './authentication/login/login.component';
import {LoginRoutingModule} from "./authentication/login-routing.module";
import {AuthService} from "./authentication/auth.service";
import {AuthGuard} from "./authentication/auth-guard.service";
import {PreventGuard} from "./authentication/prevent-guard.service";
import {EntryPostService} from "./entry-post/entry-post.service";


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LandingModule,
    AboutModule,
    EntryPostModule,
    RouterModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    appRouting,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [EntryPostService, AuthService, AuthGuard, PreventGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
