import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-about></app-about>
  <app-services></app-services>
  <app-projects></app-projects>
  <app-blog></app-blog>
  <app-contact></app-contact>

  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
