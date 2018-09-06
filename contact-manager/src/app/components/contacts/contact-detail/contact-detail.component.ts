import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { ContactsService } from '../../../services/contacts.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contactObj: {};
  contactId: number;
  isDeleted: boolean;

  constructor( private contactService: ContactsService, 
               private activateRoute: ActivatedRoute,
               private router: Router ) { 
    this.activateRoute.params.subscribe( params => {
      console.log(params);
      this.contactId =  Number(params.id);
    });
  }

  ngOnInit() {
    //
    this.contactService.getContactById(this.contactId)
                        .subscribe((contact)=>{
                          console.log(contact)
                          this.contactObj = contact;
                        })
  }

  deleteContactHandler(id){
    console.log("Inside Delete", id);
    //
    this.contactService.delete(id)
                      .subscribe((status)=>{
                        console.log(status);
                        //if/else 
                        this.isDeleted = true;

                        setTimeout(()=>{
                          //this.router.navigate(['contacts'])
                          this.router.navigateByUrl('contacts');
                        }, 3000);
                      });
    //
  }

}
