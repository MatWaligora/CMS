import { Component, OnInit } from '@angular/core';
import {AuthService} from "../authentication/auth.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  loggedIn = false;
  constructor(private as: AuthService) { }

  ngOnInit() {
    this.as.isLoggedIn.subscribe(status => this.loggedIn = status);
  }

  logout() {
    this.as.logout();
  }

}
