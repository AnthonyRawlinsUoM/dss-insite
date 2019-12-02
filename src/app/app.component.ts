import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import "reflect-metadata";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dss';

  routes = [
      { path: '/metrics', name: 'Metrics', icon: 'book icon' }, { path: '/about', name: 'About', icon: 'book icon' }
  ];

  constructor(private auth: AuthService) {}

  ngOnInit() {
      // On initial load, set up local auth streams
      this.auth.localAuthSetup();
      this.auth.handleAuthCallback();
  }
}
