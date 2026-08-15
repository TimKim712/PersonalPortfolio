import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Typed from 'typed.js';

interface TimeActivity {
  start: number;
  end: number;
  text: string;
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, AfterViewInit {
  @ViewChild('typedGreeting') typedGreeting!: ElementRef;
  @ViewChild('typedName')     typedName!: ElementRef;
  @ViewChild('typedRole')     typedRole!: ElementRef;
  @ViewChild('typedNow')      typedNow!: ElementRef;

  private nowActivity = '';

  private schedule: TimeActivity[] = [
    { start: 0,  end: 9,  text: 'sleeping' },
    { start: 9,  end: 12, text: 'in class' },
    { start: 12, end: 13, text: 'grabbing lunch' },
    { start: 13, end: 16, text: 'in class or grinding Leetcode' },
    { start: 16, end: 17, text: 'at the gym' },
    { start: 17, end: 19, text: 'making dinner' },
    { start: 19, end: 24, text: 'studying or working on a project' },
  ];

  ngOnInit(): void {
    const hour = new Date().getHours();
    this.nowActivity =
      this.schedule.find(s => hour >= s.start && hour < s.end)?.text
      ?? 'doing something interesting';
  }

  ngAfterViewInit(): void {
    new Typed(this.typedGreeting.nativeElement, {
      onComplete: () => {
        new Typed(this.typedName.nativeElement, {
          strings: ['Timothy Kim'],
          typeSpeed: 70,
          showCursor: false,
          onComplete: () => {
            new Typed(this.typedRole.nativeElement, {
              strings: ['Software Engineer'],
              typeSpeed: 60,
              showCursor: false,
              onComplete: () => {
                new Typed(this.typedNow.nativeElement, {
                  strings: [`Right now I am probably: ^300<em>${this.nowActivity}</em>`],
                  typeSpeed: 40,
                  showCursor: false,
                  contentType: 'html',
                });
              }
            });
          }
        });
      }
    });
  }
}
