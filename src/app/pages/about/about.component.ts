import { Component, AfterViewInit } from "@angular/core"
import Typed from "typed.js";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent {
  // You can add properties here to display in the template
  ngAfterViewInit(){
    new Typed('.typed-name', {strings: ['Timothy Kim'], typeSpeed: 100});
  }
  title = "Software Engineering @ San José State University"
  skills = [
  {
    group: 'Frontend',
    items: [
      'JavaScript',
      'TypeScript',
      'Angular',
      'React',
      'Vue',
      'Tailwind',
      'SCSS'
    ]
  },
  {
    group: 'Backend',
    items: [
      'Node',
      'Python',
      'Flask',
      'FastAPI',
      'SQL',
      'Java'
    ]
  },
  {
    group: 'Embedded',
    items: [
      'C/C++',
      'Assembly (x86, ARM)',
      'Raspberry Pi',
      'Arduino',
      'Bash',
      'Zsh'
    ]
  },
  {
    group: 'Developer Tools',
    items: [
      'Git',
      'Docker',
      'AWS',
      'MySQL',
      'MongoDB'
    ]
  },
  {
    group: 'Concepts',
    items: [
      'Full Stack Development',
      'Version Control',
      'Agile/Scrum',
      'Testing',
      'CI/CD',
      'Computer Architecture',
      'Operating Systems'
    ]
  }
];

}
