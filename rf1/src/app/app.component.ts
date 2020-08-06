import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rf1';
  courseList:course[] = [
    new course("1", "Python-FullStack"),
    new course('2', 'Java-FullStack'),
    new course('3', 'IST')
  ];
  courseForm = new FormGroup({
    firstname : new FormControl('',[Validators.required,Validators.minLength(5)]),
    lastname : new FormControl('',[Validators.required,Validators.minLength(5)]),
    emailid : new FormControl('',[Validators.required,Validators.email]),
    mobileno : new FormControl('',[Validators.required,Validators.pattern('(0/91)?[7-9][0-9]{9}')]),
    gender : new FormControl('',Validators.required),
    course : new FormControl('',Validators.required)
  })
  onFinal(courseForm) {
    console.log(courseForm.value);
  }

  get FirstName() {
    return this.courseForm.get('firstname')
  }
  get LastName() {
    return this.courseForm.get('lastname')
  }
  get EmailID() {
    return this.courseForm.get('emailid')
  }
  get MobileNo() {
    return this.courseForm.get('mobileno')
  }
  get Gender() {
    return this.courseForm.get('gender')
  }
  get Course() {
    return this.courseForm.get('course')
  }
}
export class course 
{
  id:string;
  name:string;
  constructor(id:string, name:string)
  {
    this.id = id
    this.name = name
  }
}