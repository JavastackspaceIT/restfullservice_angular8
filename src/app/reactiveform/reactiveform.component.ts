import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  signupform: FormGroup;
  fname: string;
  lname: string;
  password: string;
  emailId: string;
  constructor(private formBuilder: FormBuilder) {
    this.signupform =  formBuilder.group({
        fname: ['', Validators.required],
        lname: ['', Validators.required],
        password: ['' , Validators.required],
        emailId: ['', Validators.required]
      });
  }
  ngOnInit() {
  }
  postData() {
  console.log(this.signupform.value);
  }
}
