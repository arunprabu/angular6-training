import { Component } from '@angular/core';

@Component({
  selector: 'app-root',    //in index.html
  templateUrl: './app.component.html',   //logo and texts are there
  styleUrls: ['./app.component.css'] //css
})
export class AppComponent {
  //ts
  title = 'contact-manager app';
}
