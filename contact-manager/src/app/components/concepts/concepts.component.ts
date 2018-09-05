import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.css']
})
export class ConceptsComponent implements OnInit {

  //variables
  appName = 'Contact Manager App';
  version = 1.1;

  firstName = "Arun";

  constructor() { }

  ngOnInit() {
  }
  
  isAuth(){
    return false;
  }


  onBtnClickHandler(e){
    console.log(e);
    //alert("test");
  }
}
