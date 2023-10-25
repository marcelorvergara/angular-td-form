import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signupForm: NgForm
  defaultSelectValue = 'pet'
  answer: string = ""
  genders = ['male', 'female']
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  }
  submitted = false

  suggestUserName() {
    const suggestedName = 'Superuser';
    // Set value to all controlls
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // })
    // Better approach
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }

  // onSubmit(form: NgForm) {
  //   console.log('Submited!', form)
  // }

  // With @ViewChild
  onSubmit() {
    console.log('Submited!', this.signupForm)
    this.submitted = true
    this.user.username = this.signupForm.value.userData.username
    this.user.email = this.signupForm.value.userData.email
    this.user.secretQuestion = this.signupForm.value.secret
    this.user.answer = this.signupForm.value.questionAnswer
    this.user.gender = this.signupForm.value.gender

    // Reset values
    this.signupForm.reset()
  }
}
