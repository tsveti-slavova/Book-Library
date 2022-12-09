import { Component } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    form = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      repass: [],
    });

    constructor(private fb: FormBuilder, private httpClient: HttpClient) {};

    registerHandler() {
      console.log(this.form.value);

      this.form.reset()

      
    }
   
}
