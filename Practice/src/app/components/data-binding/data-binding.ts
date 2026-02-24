import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
    courseName: string = "Angular 20 Tutorial";


    maxLenght: number = 5;
    productPrice:number = 12500;

    inputType: string = "radio";

    myClassName: string  = "myColor";

    constructor() {
    }

    showWelcome() {
      alert("Welcome to angular 20")
    }

    changeCourseName() {
      this.courseName = "ReactJs Tutorial";
    }

    onCityChange() {
      alert("City Selected");
    }
}
