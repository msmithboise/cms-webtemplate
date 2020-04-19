import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  constructor() {}

  dashboardComponent: DashboardComponent = new DashboardComponent();

  title = 'Smith Designs';
  name = this.dashboardComponent.storedValue;

  ngOnInit(): void {}
}
