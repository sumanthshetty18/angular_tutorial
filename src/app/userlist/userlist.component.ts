import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  uID:string|null=null;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.uID = this.route.snapshot.paramMap.get('userId');
  }

}
