import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portal-dashboard',
  templateUrl: './portal-dashboard.component.html',
  styleUrls: ['./portal-dashboard.component.scss'],
})
export class PortalDashboardComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}

  logout(): void {
    alert('Logout');

    this.router.navigate(['login']);

    // Todo: call authOIDCserver.logoffLocal
  }
}
