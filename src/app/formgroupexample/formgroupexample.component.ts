import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormgroupService } from '../service/formgroup.service';
@Component({
  selector: 'app-formgroupexample',
  templateUrl: './formgroupexample.component.html',
  styleUrls: ['./formgroupexample.component.css']
})
export class FormgroupexampleComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private formservice: FormgroupService) {
     this.signupform =  formBuilder.group({
         fname: [''],
         lname: [''],
         password: ['']
      });
  }
  private signupform: FormGroup;
  private fname: string;
  private lname: string;
  private password: string;
  private response: any;
  private data: Array<any>;
  ngOnInit() {
  }

  register() {
    this.data = this.signupform.value;
    this.formservice.register(this.data).subscribe((mydata: any) => {
             this.response = mydata;
            });
    this.signupform.reset();
  }
}
