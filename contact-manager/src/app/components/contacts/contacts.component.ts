import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contactList: Object[];

  constructor( private contactService: ContactsService ) {
    console.log("Inside Constructor");
    
  }

  //lifecycle hooks
  ngOnInit() {
    console.log("Inside ngOnInit");
    // send the req to service 
    this.contactService.getContacts()
                      .subscribe((loadedContacts: any) => {  //receive the data from service
                        console.log(loadedContacts);
                        this.contactList = loadedContacts;
                      });
    //receive the resp from service
  }

}


