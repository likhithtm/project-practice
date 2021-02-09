import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildBComponent } from '../child-B/child-B.component';

@Component({
  selector: 'app-parent-A',
  templateUrl: './parent-A.component.html',
  styleUrls: ['./parent-A.component.scss']
})
export class ParentAComponent implements OnInit {
  
  @ViewChild(ChildBComponent, {
    static: true
  })
  viewChildReference;
  iodata = '';
  parentToChild = '';
  value = '';
  constructor() { }

  ngOnInit() {
  }

  iomethod() {
    this.parentToChild = this.iodata;
  }

  childToParentData(value) {
    this.value = value;
  }

}
