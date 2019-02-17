import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { User } from '../user';
import { Key } from 'protractor';

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
      FirstName: ['' , [Validators.required, Validators.minLength(3)]],
      LastName: ['สกุล' ,[Validators.required, Validators.minLength(3)]],
      Email:['@Email',[this.EmilVaildator]],
      Age:['22',[Validators.min(0), Validators.max(99)]]
    })
  }
    EmilVaildator(control : AbstractControl){
      const value: string =control.value;
      if (value && value.includes('@')){
          return null;
      }return{
        Email :true
      }

    }
  onSubmit(form: FormGroup){
    console.log(form.valid , form.invalid)
    //console.log((<FormControl>form.get('FirstName')).errors);
    console.log(form.get('FirstName').errors);

    const {FirstName,LastName,Email,Age} = form.value;
    console.log(FirstName,LastName,Email,Age);
    const user = new User(FirstName,LastName,Email,Age);
    console.log(user);
    // alert(FirstName);
    if (form.valid){
      const{
        FirstName,LastName,Email,Age
      }= form.value;

    }else{
      ['FirstName','LastName','Email','Age'
    ].forEach((key:string) => {
      console.log(form.get(key).touched);
      form.get(key).markAsTouched();
      console.log(form.get(key).touched);
    })
    }

  }


}
