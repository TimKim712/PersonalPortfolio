import { Component } from '@angular/core';

interface Education {
  school: string;
  logo: string;
  degree: string;
  period: string;
  activities: string[];
  coursework: string[];
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  education: Education[] = [
    {
      school: 'San José State University',
      logo: 'assets/img/sjsu.png',
      degree: 'B.S. Software Engineering',
      period: 'Aug 2022 – May 2026',
      activities: ['ACM Chapter — Treasurer', 'SJSU Archery Team'],
      coursework: [
        'Data Structures & Algorithms',
        'Operating Systems',
        'Computer Networks',
        'Machine Learning',
        'Software Engineering',
        'Computer Architecture',
        'Database Management',
        'Embedded Systems'
      ]
    }
  ];
}
