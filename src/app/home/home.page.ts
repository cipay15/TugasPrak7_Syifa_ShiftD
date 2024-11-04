import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  nama = '';

  constructor(
    private authService: AuthenticationService, 
    private router: Router
  ) {
    this.nama = this.authService.nama;
  }

  ngOnInit() {
    console.log('HomePage initialized with nama:', this.nama);
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
