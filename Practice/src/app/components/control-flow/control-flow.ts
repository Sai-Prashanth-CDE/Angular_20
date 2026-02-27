import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  isParaVisible:boolean = true;

  startMonthName:string = "feb";

  cityList: string[] = ["Pune","Mumbai","Panji","Nagpur"];


  studentList:any[] = [
    {name:'AAA',city:'Pune',isActive:false},
    {name:'BBB',city:'Mumbai',isActive:false},
    {name:'CCC',city:'Nagpur',isActive:true}


  ]

hidePara(): void {
  this.isParaVisible = false;
}

displayPara(): void {
  this.isParaVisible = true;
}


}
