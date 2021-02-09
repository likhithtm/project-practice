import { Component, Input, OnInit, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-B.component.html',
  styleUrls: ['./child-B.component.scss']
})
export class ChildBComponent implements OnInit {

  // data flows from parent to child @Input()
  @Input() parentData: string;
  // data flows from child to parent @Output()
  @Output() childData = new EventEmitter();
  outputdata = '';
  constructor() { }


  ngOnInit() {
    // this.childData.emit('Child Data');
  }

  childToParent() {
    this.childData.emit(this.outputdata);
  }

  @HostListener('click')
  handleParentClick () {
    console.log('host listner');
  }

}
