import { EditPostsComponent } from './../../editPosts/editPosts/editPosts.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { of, from, Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.scss']
})
export class RxjsOperatorsComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    // const person: any = {
    //   name: 'Likhith'
    // };

    // const personObj: Observable<string> = of('likhith');
    // personObj.subscribe(data => {
    //   console.log(data);
    // });
    // const promisePerson: Promise<any> = Promise.resolve(person);
    // const personObsObj: Observable<any> = from(promisePerson);
    // personObsObj.subscribe(
    //   res => {
    //     console.log(res);
    //   }
    // );
  }
}
