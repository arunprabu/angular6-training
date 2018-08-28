import { Component, OnInit } from '@angular/core';

//Decorator -- 
// function that receives a meta data obj 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //ts 
  constructor() { }

  ngOnInit() {
  }

}
