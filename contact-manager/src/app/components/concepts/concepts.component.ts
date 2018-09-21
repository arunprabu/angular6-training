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
  birthday;
  placeholderText: string;

  constructor() { 
    this.birthday = new Date(); 
    this.placeholderText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate odit adipisci in eligendi voluptatem est qui commodi provident, animi asperiores tenetur. Soluta ducimus qui laborum, quaerat commodi provident accusantium! Iste?';
  }

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
