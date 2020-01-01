import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

    getAdvisor(value) {
      const id = new HttpParams().set('id', value);
      return  this.http.get('http://localhost:8080/advisor/getadvisorbyid', {params: id});
  }
}
