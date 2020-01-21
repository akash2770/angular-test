import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultOptionSecret = "pet";
  genders = ['male', 'female'];
  
  @ViewChild('f', { static:false }) signupForm:NgForm;

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form:NgForm){
  //   console.log(form);
  // }

  onSubmit(){
    console.log(this.signupForm);
  }

}
