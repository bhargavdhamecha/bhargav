import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/footer/footer';
import { ContactForm } from '../../shared/contact-form/contact-form';
import { EXPERIENCE, SKILLS, EDUCATION } from '../../core/data/portfolio-data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Navbar, Footer, ContactForm],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  readonly experience = EXPERIENCE;
  readonly skills = SKILLS;
  readonly education = EDUCATION;
}
