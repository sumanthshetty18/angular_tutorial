import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tut4',
  templateUrl: './tut4.component.html',
  styleUrls: ['./tut4.component.css']
})
export class Tut4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //template driven form
  userLogin(value: any) {
    console.warn(value);
  }


  //reactive forms
  loginForm2 = new FormGroup({
    user: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),    // Validators.pattern('[a-zA-Z+$]') , Validators.email
    password2: new FormControl('',[Validators.required,Validators.minLength(4)])
  })
  userLogin2(){
    console.log(this.loginForm2.value)
  }
  get user(){
    return this.loginForm2.get('user');
  }
  get password(){
    return this.loginForm2.get('password2');
  }

}
