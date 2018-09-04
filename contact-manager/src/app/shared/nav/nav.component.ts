import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
  <ul class="navbar-nav mr-auto">
    <li class="nav-item" *ngFor="let item of navItems">
      <a class="nav-link" href="{{item.link}}">{{ item.name }}</a>
    </li>

  </ul>
  `,
  styles: []
})
export class NavComponent implements OnInit {

  navItems: Object[];

  constructor() { 
    this.navItems =  [
      { name: 'Home', link: '/'},
      { name: 'Contacts', link: '/contacts'},
      { name: 'Add Contact', link: '/add-contact'},
      { name: 'About', link: '/about'}
    ];
    
    console.log(this.navItems);
  }

  ngOnInit() {
  }

}
