import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentListComponent } from './student/student-list/student-list.component';

export const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'students', component: StudentListComponent },
];
