import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ConceptsComponent } from './components/concepts/concepts.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AddContactComponent } from './components/contacts/add-contact/add-contact.component';


//configure the routes
const APP_ROUTES: Routes = [
  //syntax: { path: '', component: ...  }
  { path: '', component: ConceptsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'add-contact', component: AddContactComponent }
]

//Decorator
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ConceptsComponent,
    ContactsComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES), // registering the routes
    HttpModule
  ],
  providers: [],   //you need to provide service
  bootstrap: [AppComponent]   // AppModule should be bootstraped with a component 
})
export class AppModule { }
