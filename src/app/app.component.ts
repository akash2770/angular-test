import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user = { usernames:'', email:'', secret:'', questionAnswer:'', gender:'' };
  submittedForm = false;
  defaultOptionSecret = "pet";
  genders = ['male', 'female'];
  
  @ViewChild('f', { static:false }) signupForm:NgForm;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email:''
    //   },
    //   secret:'pet',
    //   questionAnswer:'',
    //   gender:'male'
    // })

    this.signupForm.form.patchValue({
        userData : {
          username : suggestedName
        }
    });

  }


  onSubmit(){
    this.submittedForm = true;
    this.user.usernames = this.signupForm.value.userData.username;
    this.user.email  = this.signupForm.value.userData.email;
    this.user.secret = this.signupForm.value.secret;
    this.user.questionAnswer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.signupForm.reset();
  }

}
