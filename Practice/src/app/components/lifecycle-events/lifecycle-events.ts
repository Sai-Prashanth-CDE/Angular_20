import { DatePipe, JsonPipe, LowerCasePipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-events',
  imports: [UpperCasePipe,LowerCasePipe,SlicePipe,JsonPipe, DatePipe],
  templateUrl: './lifecycle-events.html',
  styleUrl: './lifecycle-events.css',
})
export class LifecycleEvents implements OnInit, AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

    firstName:string = 'Sai';
    courseName:string = 'Angular 20 tutorial';
    rollNoList:number[] = [1,2,3,4,5,6];
    currentDate:Date = new Date();

    studentObj:any = {
      name:'sai',
      city:'Pune',
      state:'MN'
    }

  constructor() {
    console.log("Constructor is first");
  }

  ngOnDestroy(): void {
        console.log("This is in destroy");
        // Unsubscribe the subscriptions.
        // restrict something (like user from navigating).

  }
  ngAfterViewChecked(): void {
        console.log("After view checked");

  }
  ngAfterViewInit(): void {
        console.log("After view init");
        // to deal with viewchild( when child view is succesfully initalized)
        // also to subscribe

  }
  ngAfterContentChecked(): void {
        console.log("After content checked");

  }
  ngAfterContentInit(): void {
        console.log("After content init");

  }
  ngOnInit(): void {
    console.log('This is from oninit');
    // This is to trigger api calls
    // to subscribe
  }


  

}
