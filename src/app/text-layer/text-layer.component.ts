import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-layer',
  templateUrl: './text-layer.component.html',
  styleUrls: ['./text-layer.component.css']
})
export class TextLayerComponent implements OnInit {
  constructor() {}

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
