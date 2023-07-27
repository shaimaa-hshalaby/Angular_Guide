import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../entities/Student.model';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']

// test adding providers on the level of the component
  // ,providers:[StudentService]
})
export class NewStudentComponent {

  constructor(private studentService:StudentService){

  }

  onStudentAdded(firstName:string,lastName:string){
    this.studentService.createStudent(firstName,lastName)
  }

}
