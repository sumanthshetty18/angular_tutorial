import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentDetailsService {

  constructor() { }

  getStudDetails(){
      return(
        [
          {name:'harish',usn:'CS090',email:'har@test.com'},
          {name:'rakesh',usn:'CS092',email:'rak@test.com'},
          {name:'tharak',usn:'CS093',email:'tha@test.com'},
        ]
      )
  }
}
