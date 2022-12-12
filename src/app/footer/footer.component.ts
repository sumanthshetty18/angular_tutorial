import { Component, OnInit } from '@angular/core';
import { StudentDetailsService } from '../services/student-details.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  details: any;

  constructor(private students: StudentDetailsService) {
    this.details = students.getStudDetails();
  }

  ngOnInit(): void {
  }

}
