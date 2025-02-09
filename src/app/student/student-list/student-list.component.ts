import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from 'src/app/footer/footer.component';
import { HeaderComponent } from '../../header/header.component';
import { Student } from '../student-details/student.model';
import { StudentService } from '../student-details/student.service';

@Component({
  selector: 'app-student-list',
  standalone: true,
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  imports: [CommonModule, HeaderComponent, FooterComponent],
})
export class StudentListComponent {
  students: Student[] = [];
  selectedStudent?: Student;

  constructor(private studentService: StudentService) {
    this.students = this.studentService.getStudents();
  }

  selectStudent(student: Student): void {
    this.selectedStudent = student;
  }
}
