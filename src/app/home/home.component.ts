import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from './../core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

  navigateCollection() {
    this.router.navigate(['collection']);
  }

  navigateSearch() {
    this.router.navigate(['search']);
  }

}
