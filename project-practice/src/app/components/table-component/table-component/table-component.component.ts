import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.scss']
})
export class TableComponentComponent implements OnInit, OnChanges {

  @Input() objects = [];
  @Output() deleteAction = new EventEmitter();
  objectKeys = [];
  actionsArray = [];
  constructor() { }

  ngOnInit() {
    this.createActionArray();
  }

  createActionArray() {
    const actions = ['ADD', 'EDIT', 'DELETE'];

    actions.forEach(action => {
      const actionObj = {
        name: action,
        addObject: this.addObject,
        editObject: this.editObject,
        deleteObj: this.deleteObj,
        callback: this.actionMethod
      };

      this.actionsArray.push(actionObj);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.objects) {
      if (changes.objects.currentValue !== undefined) {
        if (changes.objects.currentValue.length > 0) {
          this.objectKeys = Object.keys(changes.objects.currentValue[0]);
        }
      }
    }
  }

  actionMethod(object, key) {

    switch (key) {
      case 'ADD':
        this.addObject(object);
        break;

      case 'EDIT':
        this.editObject(object);
        break;

      case 'DELETE':
        this.deleteObj(object);
        break;
    }
  }

  addObject(obj) {
    console.log(`object ${JSON.stringify(obj)} added to the list`);
  }

  editObject(obj) {
    console.log(`object ${JSON.stringify(obj)} has modified`);
  }
  deleteObj(object) {
    this.deleteAction.emit(object);
  }
}
