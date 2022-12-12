import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // interpolation binding
  months = ['jan', 'feb', 'mar', 'april', 'may', 'june'];


  // property binding and conditional 
  // toggle button content
  isUnchanged =true; 

  // class binding
  successClass='text-success';
  dangerClass='text-danger';
  hasError= false;
  msgClasses={
    'text-danger': this.hasError,
    'text-success': !this.hasError
  }

  //style binding
  titleStyles={
    color:'violet',fontStyle:'italic',fontFamily:'cursive'
  }

  //event binding
  greeting="";
  eventType="";
  whenClick(event:MouseEvent){
      this.greeting="Welcome :)";
      console.log(this.greeting);

      this.eventType=event.type;
      console.log(this.eventType);
  }

  //template reference variable
  logMsg(value:string){
    console.log(value);
  }
}
