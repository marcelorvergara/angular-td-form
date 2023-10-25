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
  }
}
