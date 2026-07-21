import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/footer/footer';
import { Hero } from '../../shared/hero/hero';
import { FloatContact } from '../../shared/float-contact/float-contact';
import { ContactForm } from '../../shared/contact-form/contact-form';
import { Reveal } from '../../core/directives/reveal';
import { CountUp } from '../../core/directives/count-up';
import { EXPERIENCE, SKILLS, EDUCATION } from '../../core/data/portfolio-data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Navbar, Footer, Hero, FloatContact, ContactForm, Reveal, CountUp],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  readonly experience = EXPERIENCE;
  readonly skills = SKILLS;
  readonly education = EDUCATION;
}
