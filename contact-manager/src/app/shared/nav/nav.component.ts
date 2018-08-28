import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
  <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
      <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Contacts</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Add Contact</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">About</a>
    </li>
  </ul>
  `,
  styles: []
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
