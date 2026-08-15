import { Component } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent {
  skills = [
    {
      group: "Frontend",
      items: ["JavaScript", "TypeScript", "Angular", "React", "Vue", "Tailwind", "SCSS"]
    },
    {
      group: "Backend and Databases",
      items: ["Node", "Python", "Flask", "FastAPI", "Java", "Spring Boot", , "Play", "Maven", "SQL", "MySQL", "MongoDB", "PostgreSQL", "OracleDB", "Redis"]
    },
    {
      group: "Embedded",
      items: ["C/C++", "Assembly (x86, ARM)", "Raspberry Pi", "Arduino", "Bash", "Zsh"]
    },
    {
      group: "Developer Tools",
      items: ["Git (GitHub, GitLab, BitBucket)", "Docker", "AWS", "Figma", "Selenium"]
    },
    {
      group: "Concepts",
      items: [
        "Full Stack Development",
        "Version Control",
        "Agile/Scrum",
        "Testing",
        "CI/CD",
        "REST APIs",
        "Network Protocols (HTTP, TCP/IP, UDP, IEEE 802.11)",
        "Computer Architecture",
        "Operating Systems",
        "Machine Learning"
      ]
    }
  ];
}
