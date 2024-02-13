// import { HttpClient } from '@angular/common/http';
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'MaterialDesignInReactiveFormAngular16';
//   myForm!: FormGroup;
//   firstName: string = '';
//   lastName: string = '';
//   address: string = '';
//   // Dob:Date = null;
//   Dob: Date | null = null;
//   gender: string = '';
//   blog: string = '';
//   email: string = '';
//   IsAccepted: number = 0;

//   constructor(private fb: FormBuilder) { }

//   ngOnInit(): void {
//     this.myForm = this.fb.group({
//       firstName: [null, Validators.required],
//       lastName: [null, Validators.required],
//       address: [null, Validators.required],
//       Dob: [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(200)])],
//       gender: [null, Validators.required],
//       blog: [null, Validators.required],
//       email: [null, Validators.compose([Validators.required, Validators.email])],
//       IsAccepted: [null, Validators.required],
//     });
//   }
//   onChange(event: any): void {
//     if (event.checked == true) {
//       this.IsAccepted = 1;
//     } else {
//       this.IsAccepted = 0;
//     }
//   }
//   onFormSubmit(){
//     console.log(this.myForm.value);
    
//   }
// }


import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MaterialDesignInReactiveFormAngular16';
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      Dob: [null, Validators.required],
      gender: ['', Validators.required],
      blog: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      IsAccepted: ['', Validators.required],
      comment: ['', Validators.required],
    });
  }

  onChange(event: any): void {
    this.myForm.get('IsAccepted')?.setValue(event.checked);
  }

  onFormSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      // You can add further logic for form submission here
    } else {
      console.log("Form is invalid. Please fill in all required fields.");
    }
  }
}
