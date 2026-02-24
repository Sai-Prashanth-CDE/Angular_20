import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {

  firstName:string = "Sai";
  productName = "Moto";

  courseName = signal<string>("Angular");

  courseDuration = signal("15 Videos");

  courseDetails = computed(()=> this.courseName() + this.courseDuration());

  constructor() {
    this.firstName = "Rahul";

    setTimeout(() => {
    this.courseName.set("React");

    },5000);
     

  }
  
}
