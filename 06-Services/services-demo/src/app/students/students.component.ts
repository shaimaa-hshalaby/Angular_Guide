import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../entities/Student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']

  // ,providers:[StudentService]
})
export class StudentsComponent implements OnInit {

  students:Student[]=[];
  constructor(private studentService:StudentService){}

  ngOnInit(): void {
    this.students = this.studentService.getAllStudents();
  }

}
