import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-about-page',
    standalone: true,
    templateUrl: './about-page.component.html',
    styleUrl: './about-page.component.css',
    imports: [CommonModule, NavbarComponent, FooterComponent]
})
export class AboutPageComponent {

}
