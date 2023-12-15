import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
constructor(private userService: UserService){}
  ngOnInit(): void {
    const mobileBtn = document.getElementById('mobile-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileBtn && mobileMenu) {
      mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }
  }
  getUserName() {
    return this.userService.user ? this.userService.user.fullname : '';
  }

}
