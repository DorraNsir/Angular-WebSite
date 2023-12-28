import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  public loginForm!:FormGroup
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router,private userService: UserService){}
  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:[''],
      password:['']
    })
  }
  login() {
    this.http.get<any>("http://localhost:3000/posts")
  .subscribe(res => {
    if (Array.isArray(res)) {
      const user = res.find((a: any) => {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;
      });
      this.userService.setUser(user);
      if (user) {
        alert("Login Success");
        this.loginForm.reset();
        this.router.navigate(['dashboard']);
      } else {
        alert("User not found");
      }
    } else {
      alert("Unexpected response format from the server");
    }
  }, err => {
    alert("Something went wrong!!");
  });

    }
 
  

}
