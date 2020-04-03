import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() {}

  title = 'Smith Designs';
  clickMessage = 'Hello';
  show: boolean = false;
  buttonName: any = 'More Info';

  toggle() {
    this.show = !this.show;

    // Change the name of the button
    if (this.show)
      this.clickMessage = 'Contact one of our associates at (555) 453-1588';
    else this.clickMessage = '';
  }

  ngOnInit(): void {}
}
