import { Component, OnInit } from '@angular/core';
import { Users } from '../Users';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-userregistrationform',
  templateUrl: './userregistrationform.component.html',
  styleUrls: ['./userregistrationform.component.css']
})
export class UserregistrationformComponent implements OnInit {
user = new Users();
  constructor() { }

  ngOnInit() {
  }

  onFormSubmit(form: NgForm) {
    alert('this is clle');
    console.log('onFormSumbit');
    console.log(form.controls['uname'].value);
    console.log(form.controls['gender'].value);
  }
}
