import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-contact-page',
    standalone: true,
    templateUrl: './contact-page.component.html',
    styleUrl: './contact-page.component.css',
    imports: [CommonModule, NavbarComponent, FooterComponent]
})
export class ContactPageComponent {

}
