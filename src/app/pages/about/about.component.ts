import { Component, AfterViewInit, OnInit, ViewChild, ElementRef } from "@angular/core";
import Typed from "typed.js";

interface TimeActivity {
  start: number; // hour in 24h
  end: number;
  text: string;
}



@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit, AfterViewInit {

  @ViewChild("typedName", { static: true })
  typedName!: ElementRef;

  @ViewChild("typedActivity", { static: true })
  typedActivity!: ElementRef;
  nowActivity = "";

  private schedule: TimeActivity[] = [
    { start: 0,  end: 9,  text: "sleeping 😴" },
    { start: 9,  end: 12, text: "class" },
    { start: 12, end: 13, text: "grabbing lunch" },
    { start: 13, end: 16, text: "class or grinding Leetcode" },
    { start: 16, end: 17, text: "at the gym" },
    { start: 17, end: 19, text: "making dinner" },
    { start: 19, end: 24, text: "studying or working on a project" },
  ];

  ngOnInit(): void {
    this.setCurrentActivity();
  }

  ngAfterViewInit(): void {
    this.initTypedName();
    this.initTypedActivity();
  }

  private setCurrentActivity(): void {
    const hour = new Date().getHours();
    this.nowActivity =
      this.schedule.find(s => hour >= s.start && hour < s.end)?.text
      ?? "doing something interesting";
  }

  private initTypedName(): void {
    new Typed(this.typedName.nativeElement, {
      strings: ["Timothy Kim"],
      typeSpeed: 100,
      showCursor: false
    });
  }

  private initTypedActivity(): void {
    new Typed(this.typedActivity.nativeElement, {
      strings: [this.nowActivity],
      typeSpeed: 40,
      startDelay: 600, // waits for name typing to begin
      showCursor: false
    });
  }
  title = "Software Engineering @ San José State University";

  skills = [
    {
      group: "Frontend",
      items: ["JavaScript", "TypeScript", "Angular", "React", "Vue", "Tailwind", "SCSS"]
    },
    {
      group: "Backend",
      items: ["Node", "Python", "Flask", "FastAPI", "SQL", "Java", "MySQL", "MongoDB"]
    },
    {
      group: "Embedded",
      items: ["C/C++", "Assembly (x86, ARM)", "Raspberry Pi", "Arduino", "Bash", "Zsh"]
    },
    {
      group: "Developer Tools",
      items: ["Git", "Docker", "AWS", "Figma", "Selenium"]
    },
    {
      group: "Concepts",
      items: [
        "Full Stack Development",
        "Version Control",
        "Agile/Scrum",
        "Testing",
        "CI/CD",
        "RESTful APIs",
        "Network Protocols (HTTP, TCP/IP, UDP, IEEE 802.11)",
        "Computer Architecture",
        "Operating Systems"
      ]
    }
  ];
}
