import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { ContactsService } from '../../../services/contacts.service';

declare var $: any;

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contactObj: {};
  contactId: number;
  isDeleted: boolean;
  isUpdated: boolean;

  editableContactObj : {};

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


  openEditModal(){
    console.log("test");

    //show the modal using js 
    $("#editContactModal").modal('show');

    this.editableContactObj = {
      id: this.contactObj['id'],
      name: this.contactObj['name'],
      email: this.contactObj['email'],
      phone: this.contactObj['phone']
    }
  }

  //update
  updateContact(){
    console.log(this.editableContactObj);

    //send the data to service
    this.contactService.update(this.editableContactObj)
                        .subscribe( (resp) =>{
                          console.log(resp);

                          // DOM will be mutated automatically
                          this.isUpdated = true;

                          setTimeout(() => {
                            $("#editContactModal").modal('hide');
                            //this.router.navigate(['contacts']);
                            
                          }, 3000);
                         
                        });
    //get the resp
    
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
