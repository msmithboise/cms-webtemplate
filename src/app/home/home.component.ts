import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { TextLayerComponent } from 'src/app/text-layer/text-layer.component';
import { BannerComponent } from 'src/app/banner/banner.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
