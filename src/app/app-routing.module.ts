import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { StudentregisterationComponent } from './studentregisteration/studentregisteration.component';
import { ContactComponent } from './contact/contact.component';
import { StudentsearchbynameComponent } from './studentsearchbyname/studentsearchbyname.component';
import { UserregistrationformComponent } from './userregistrationform/userregistrationform.component';
import { FormgroupexampleComponent } from './formgroupexample/formgroupexample.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

const routes: Routes = [
    {
      path: 'dashbaord', component: DashboardComponent
    },
    {
     path: 'student' , component: StudentComponent
    },
    {
      path: 'about' , component: AboutComponent
    },
    {
      path: 'register', component: StudentregisterationComponent
    },
    {
      path: 'contact' , component: ContactComponent
    },
    {
      path: 'searchbyname', component: StudentsearchbynameComponent
    },
    {
      path: 'registeruser', component: UserregistrationformComponent
    },
    {
      path: 'formgroup', component: FormgroupexampleComponent
    }
    ,
    {
      path: 'dropdown', component: DropdownComponent
    },
    {
      path: 'reactiveform', component: ReactiveformComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
