import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 formGroup: FormGroup
  constructor(
    private formBuild: FormBuilder
    ) { 
      
    }
  

  ngOnInit() {
    this.formGroup = this.formBuild.group({
      FirstName: this.formBuild.control(''),
      LastName: [''],
      Email:[''],
      Age:['21']
    })
  }
  onSubmit(form: FormGroup){
    const {FirstName,LastName,Email,Age} = form.value;
    console.log(FirstName,LastName,Email,Age);
    const user = new User(FirstName,LastName,Email,Age);
    console.log(user);
    alert(FirstName);

  }


}
