import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  public signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname: [''],
      email: [''],
      password: ['']
    });
  }

  signUp() {
    console.log('Form Value:', this.signupForm.value);
  
    this.http.post<any>('http://localhost:3000/posts', this.signupForm.value).subscribe(
      (res) => {
        console.log('Response:', res);
        alert('Signup Successful');
        this.signupForm.reset();
        this.router.navigate(['login']);
      },
      (err) => {
        console.error('Error:', err);
        alert('Something went wrong');
      }
    );
  }
}