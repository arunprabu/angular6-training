import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

//Decorator
@Injectable({
  providedIn: 'root'
})

export class ContactsService {

  //dep inj
  constructor( private http: Http ) {

  }

  //create
  create( contactData ){ // receive the data from comp
    console.log(contactData);

    // send the data to the rest api url 
    return this.http.post("https://jsonplaceholder.typicode.com/users", contactData)
                    .pipe(map(response => {    //receive the resp from rest api 
                        console.log(response);
                        return response.json();   //sending it back to component thru service
                      }
                    ));
    // channelise it back to the component by 'return'
  }

  //read
  getContacts(){
    console.log("inside service");
    // send the req to the rest api url 
    return this.http.get("https://jsonplaceholder.typicode.com/users/")
              .pipe(map(response => {    //receive the resp from rest api 
                console.log(response);
                return response.json();   //sending it back to component thru service
              }
            ));
  }

  //get contact details
  getContactById(id){
    console.log(id);
    return this.http.get("https://jsonplaceholder.typicode.com/users/"+id)
              .pipe(map(response => {    //receive the resp from rest api 
                console.log(response);
                return response.json();   //sending it back to component thru service
              }
            ));
  }

  //update

  //delete 
  delete(id){
    return this.http.delete("https://jsonplaceholder.typicode.com/users/"+id)
              .pipe(map(response => {    //receive the resp from rest api 
                console.log(response);
                return response.json();   //sending it back to component thru service
                }
              ));
  }
}
