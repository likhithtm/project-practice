import { 
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  AfterContentChecked,
  OnDestroy,
  SimpleChanges,
  AfterContentInit
} from '@angular/core';

@Component({
  selector: 'app-angular-hooks',
  templateUrl: './angular-hooks.component.html',
  styleUrls: ['./angular-hooks.component.scss']
})
export class AngularHooksComponent implements OnInit, OnChanges, AfterViewInit,
AfterContentInit, AfterViewChecked, AfterContentChecked, AfterViewChecked, OnDestroy {

  order = 1;
  constructor() { 
    console.log('I am from constructor()!! and my order::::' + this.order);
    this.order++;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnchanges triggered');
    console.log('I am from ngAfterContentInit() and my order::::' + this.order);
  }
  ngOnInit() {
    console.log('oninit triggered');
    console.log('I am from ngOnInit() and my order::::' + this.order);
  }

  // ngDoCheck() {

  // }

  ngAfterContentInit() {
    console.log('I am from ngAfterContentInit() and my order::::' + this.order);
    this.order++;
  }

  ngAfterContentChecked() {
    console.log('I am from ngAfterContentChecked() and my order::::' + this.order);
    this.order++;
  }

  ngAfterViewInit() {
    console.log('I am from ngAfterViewInit() and my order::::' + this.order);
    this.order++;
  }

  ngAfterViewChecked() {
    console.log('I am from ngAfterViewChecked() and my order::::' + this.order);
    this.order++;
  }

  ngOnDestroy() {
    console.log('I am from ngOnDestroy() and my order::::' + this.order);
    this.order++;
  }

}
