import { Component, inject, OnInit, signal } from '@angular/core';
import { DataSharing } from '../services/data-sharing';
import { Admin } from "./components/admin/admin";
import { User } from "./components/user/user";
import { DataBinding } from './components/data-binding/data-binding';
import { Signals } from "./components/signals/signals";
import { ControlFlow } from './components/control-flow/control-flow';
import { RouterLink, RouterOutlet } from "@angular/router";
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import { selectCount, selectCounterState } from './store/counter.selector';
import { incrementCounter } from './store/counter.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Admin, User, DataBinding, Signals, ControlFlow, RouterLink, RouterOutlet]
})
export class App implements OnInit{
  ngOnInit(): void {
  }

  // constructor(private store:Store<AppState>) {
  //    this.counter$ = store.select(selectCount);
  //    //.subscribe(res=> this.counter$ = res);
  // }

  // counter$:Observable<number> = new Observable<number>;


  // onIncrement() {
  //    this.store.dispatch(incrementCounter())
  // }

  onDecrement() {

  }



  data = inject(DataSharing);

  count = this.data.count;

  increment() {
    this.data.increment();
  }

  
  

}
