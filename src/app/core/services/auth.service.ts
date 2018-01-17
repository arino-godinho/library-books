import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  isLoggedIn = false;
  redirectUrl: string;

  constructor(
    private router: Router
  ) { }

  login(user: any): Observable<boolean> {
    if (user['username'] === 'book') {
      return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
    } else {
      return Observable.of(false).delay(1000).do(val => this.isLoggedIn = false);
    }
  }

  logout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

}
