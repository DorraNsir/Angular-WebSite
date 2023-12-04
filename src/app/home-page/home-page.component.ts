import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { HeroComponent } from "../hero/hero.component";
import { FooterComponent } from "../footer/footer.component";
import { BlogComponent } from "../blog/blog.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
    imports: [CommonModule, NavbarComponent, HeroComponent, FooterComponent, BlogComponent]
})
export class HomePageComponent {
    blogs:any=["gg"," "," "];

}
