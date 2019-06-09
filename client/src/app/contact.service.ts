import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Contact } from './contact';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: Http) { }

  //retriving contacts
  getContacts(){
    return this.http.get('http://localhost:3000/api/contacts').pipe(
    map(res => res.json()));
  }

  // Add Contact
  addContact(newContact){
    var headers = new Headers();
    headers.append('Contact-Type','application/json');
    return this.http.post('http://localhost:3000/api/contacts',newContact, {headers:headers})
    .pipe(map(res=> res.json()));
  }

  //Delete Contact
  deleteContact(id){
    return this.http.delete('http://localhost:3000/api/contacts/'+id)
    .pipe(map(res=>res.json()));
  }

}
