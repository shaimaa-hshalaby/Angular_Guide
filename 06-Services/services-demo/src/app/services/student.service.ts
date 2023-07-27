import { OnInit, Injectable, OnDestroy  } from "@angular/core";
import { Student } from "../entities/Student.model";

@Injectable({ providedIn: 'root' })
// @Injectable()
export class StudentService implements OnDestroy{
    students:Student[];

    constructor(){
        this.students=[]
        // this.students.push(new Student(0,"Hamza","Amir"))
        // this.students.push(new Student(1,"Ahmed","Hussin"))
        // this.students.push(new Student(2,"Ali","Mohamed"))
        // this.students.push(new Student(3,"Omar","Ismail"))
        // this.students.push(new Student(4,"Shaimaa","Shalaby"))
    }

    ngOnInit(): void {
      
        console.log("[StudentService] inside on init method")
    }

    ngOnDestroy(): void {
        console.log("[StudentService] inside on destroy method")
    }

    getAllStudents(){
        return this.students
    }

    getStudentById(id:number){
        return this.students.at(id)
    }

    createStudent(firstName:string,lastName:string){
        let index = this.students.length;
        this.students.push(new Student(index,firstName,lastName))
    }

    deleteStudent(id:number){
        delete this.students[id]
    }
}