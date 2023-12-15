import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomePageComponent } from "./home-page/home-page.component";
import { FooterComponent } from "./footer/footer.component";
import { HttpClientModule } from '@angular/common/http';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, NavbarComponent, FontAwesomeModule, HomePageComponent, RouterOutlet, FooterComponent,HttpClientModule]
})
export class AppComponent {
  
  title = 'crash-course';
  constructor(){}
}
