import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subjects/subject.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  childVariable;
  constructor(private subject: SubjectService) {

    setTimeout(x => {
      this.subject.serviceText.subscribe(data => {
        console.log(data);
        this.childVariable = data;
      });
    }, 5000);

  }

  ngOnInit() {
  }

}
