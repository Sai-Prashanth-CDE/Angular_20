import { NgClass, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  imports: [NgClass,NgStyle],
  templateUrl: './attribute-directive.html',
  styleUrl: './attribute-directive.css',
})
export class AttributeDirective {

  div1className = signal<string>("");
  isDiv2Green:boolean = false;

  setBgClass(className:string) {
     this.div1className.set(className);
  }

  toggleValue() {
    this.isDiv2Green = !this.isDiv2Green;
  }

}
