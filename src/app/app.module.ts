import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { StudentregisterationComponent } from './studentregisteration/studentregisteration.component';
import { ContactComponent } from './contact/contact.component';
import { StudentsearchbynameComponent } from './studentsearchbyname/studentsearchbyname.component';
import { LoginComponent } from './login/login.component';
import { UserregistrationformComponent } from './userregistrationform/userregistrationform.component';
import { FormgroupexampleComponent } from './formgroupexample/formgroupexample.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    DashboardComponent,
    AboutComponent,
    StudentregisterationComponent,
    ContactComponent,
    StudentsearchbynameComponent,
    LoginComponent,
    UserregistrationformComponent,
    FormgroupexampleComponent,
    DropdownComponent,
    ReactiveformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
