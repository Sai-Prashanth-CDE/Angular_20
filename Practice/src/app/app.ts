import { Component, inject, OnInit, signal } from '@angular/core';
import { DataSharing } from '../services/data-sharing';
import { Admin } from "./components/admin/admin";
import { User } from "./components/user/user";
import { DataBinding } from './components/data-binding/data-binding';
import { Signals } from "./components/signals/signals";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Admin, User, DataBinding, Signals]
})
export class App implements OnInit{
  ngOnInit(): void {
  }

  data = inject(DataSharing);

  count = this.data.count;

  increment() {
    this.data.increment();
  }

  
  

}
