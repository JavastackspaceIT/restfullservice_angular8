import { Component, OnInit } from '@angular/core';
import { Employee } from '../classes/employee';
import { Advisor } from '../classes/advisor';
import { DropdownService } from '../service/dropdown.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  employee: Employee[];
  // tslint:disable-next-line:ban-types
  empSelected: Number;
  advisor = new Advisor();

  constructor(private service: DropdownService) { }

  ngOnInit() {
     this.employee = [
        {
          id: 2011, name: 'p'
        },
        {
         id: 2012, name: 'h'
        },
        {
          id: 2013, name: 's'
        },
        {
          id: 2014, name: 'g'
        },
        {
          id: 2015, name: 'm'
        },
        {
          id: 2016, name: 'j'
        }
     ];

     this.empSelected = 2016;
  }

  onEmployeeSelected(emp: any) {
  console.log(this.service.getAdvisor(emp).subscribe((data: any) => {
  this.advisor = data;
  }));
  }
}
