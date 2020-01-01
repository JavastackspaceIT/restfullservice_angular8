import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormgroupService {

  constructor(private http: HttpClient) {
   }
  register(user) {
    return     this.http.post('http://localhost:8080/student/formgroup', user , {responseType: 'text'});
  }
}
