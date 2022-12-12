import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StudentDetailsService } from '../services/student-details.service';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-tut3',
  templateUrl: './tut3.component.html',
  styleUrls: ['./tut3.component.css']
})
export class Tut3Component implements OnInit {

  details: any;
  users: any;

  constructor(private students: StudentDetailsService,private user: UsersService) {
    this.details = students.getStudDetails();
    user.getDetails().subscribe((data) => {
      this.users = data;
    });
  }

  submitForm(data: any) {
    // console.warn(data);
    this.user.addUser(data).subscribe((result:any)=>{
      console.warn(result);
    })
  }


  ngOnInit(): void {
  }

}
