import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tut2-nested',
  templateUrl: './tut2-nested.component.html',
  styleUrls: ['./tut2-nested.component.css']
})
export class Tut2NestedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   //parent to child interaction
   @Input() prod:any;
   // @Input('prod') item:any;                      alias name - item


   //child to parent interaction
   @Output() childEvent = new EventEmitter();
   fireEvent(value:string){
      this.childEvent.emit(value);
   }

}
