import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tut2',
  templateUrl: './tut2.component.html',
  styleUrls: ['./tut2.component.css']
})
export class Tut2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //2 way binding
  public name = '';
  showInConsole(){
    console.log(this.name);
  }

  //ngIf
  showTitle: boolean = false;

  display: boolean = true;
  displayName() {
    this.display = !this.display;
  }

  //ngSwitch
  car: string = 'tata';  // tata maruthi honda

  //ngFor
  vehicles = ['hima', 'ruby', 'bhageera'];

  //parent to child
  p_List = [
    {
      'id': 0,
      'name': 'Trimmer',
      'price': '399',
      'img':'https://d190p5azv0fkp7.cloudfront.net/2160x0/uploads/5556-beardo-apex-trimmer-listing-image_1080-x-855.jpg'
    },
    {
      'id': 1,
      'name': 'Mouse',
      'price': '359',
      'img':'https://gamesncomps.com/wp-content/uploads/2022/08/2-2022-08-12T171115.697.jpg'
    },
    {
      'id': 2,
      'name': 'Keyboard',
      'price': '599',
      'img':'https://elitehubs.com/wp-content/uploads/2022/07/61aHJIjnH6L._SX679_.jpg'
    },
  ]

  //child to parent
  message:any;

  //pipes
  person={
    name:'shetty',
    id:18,
  }
  newDate = new Date();



}
// true false