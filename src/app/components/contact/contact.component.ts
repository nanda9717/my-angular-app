import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomCountPipe } from '../../shared/pipes/custom-count.pipe';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CustomCountPipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: any;
  data: any = {name:'Nane',email:'nane@yopmail.com',createdOn:'2021-01-12',age:21,salary: 25000};
  fruits: any[] = ['Oranage','Apple','Grapes','Banana']
  constructor(private fb: FormBuilder){}

  ngOnInit(): void{
    this.contactForm = this.fb.group({
      name: ['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(18)]],
      salary: ['', [Validators.required]],
      createdOn: ['', [Validators.required]]
    })
    //console.log(this.data,'==')
  }

  submitForm(){
    console.log(this.contactForm.value,'==value---==')
    this.data = this.contactForm.value;
  }
}
