import { Injectable } from '@angular/core';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: Student[] = [
    { id: 1, name: 'John Doe', age: 20, course: 'Computer Science' },
    { id: 2, name: 'Jane Smith', age: 22, course: 'Mathematics' },
    { id: 3, name: 'Sam Brown', age: 19, course: 'Physics' },
  ];

  getStudents(): Student[] {
    return this.students;
  }
}
