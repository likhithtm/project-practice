import { SubjectService } from './../../../services/subjects/subject.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  parentVariable = 'Hello';
  constructor(private subject: SubjectService) {
    // this.subject.serviceText.subscribe(data => {
    //   this.parentVariable = data;
    // });
  }

  ngOnInit() {
    this.reasign();
  }

  reasign() {
    this.parentVariable = 'Hello Subjects';
    for (let i = 1; i <= 25; i++) {
      this.subject.serviceText.next(i);
    }
  }

}
