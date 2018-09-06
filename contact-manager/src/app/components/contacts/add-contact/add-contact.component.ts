import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../../services/contacts.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contactObj: Object = { };  
  isSaved: boolean = false;

  //dependency injection
  constructor(  private contactService: ContactsService ) { 
  
  }   

  ngOnInit() {
  }

  newContactFormHandler(){
    console.log(this.contactObj);

    //send the data to service
    this.contactService.create(this.contactObj)
                      .subscribe((savedContactInfo: any) => {  //receive the data from service
                        console.log(savedContactInfo);
                        this.isSaved = true;
                      });
    //expect response from service 
  }

  
}
