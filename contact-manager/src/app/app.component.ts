import { Component } from '@angular/core';

//Decorator
@Component({
  selector: 'app-root',    //in index.html
  templateUrl: './app.component.html',   //logo and texts are there
  styleUrls: ['./app.component.css'] //css
})
export class AppComponent {
  //ts
  //variables
  appName = 'Contact Manager App';
  version = 1.1;

  firstName = "Arun";
  
  isAuth(){
    return false;
  }


  onBtnClickHandler(e){
    console.log(e);
    //alert("test");
  }
}


