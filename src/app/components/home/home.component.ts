import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 title = "Angular works";
 show = true;

 constructor(){
  console.log("constructor")
 }

 ngOnInit(){
  console.log('====ngOnInit====')
 }

 ngDoCheck(){
  console.log("====ngDoCheck===")
 }

 ngOnChanges(){
  console.log("====ngOnChanges===")
 }

 ngAfterContentInit(){
  console.log("==== After content Init===")
 }

 ngOnDestroy(){
  console.log("Destroy")
 }

}
