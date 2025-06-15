import { Component } from "@angular/core"

interface SocialLink {
  name: string
  url: string
  icon: string
  description: string
}

@Component({
  selector: "app-references",
  templateUrl: "./references.component.html",
  styleUrls: ["./references.component.css"],
})
export class ReferencesComponent {
  socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      url: "https://github.com/TimKim712",
      icon: "fab fa-github",
      description: "Check out my code repositories and open-source contributions",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/timothy-kim712",
      icon: "fab fa-linkedin",
      description: "Connect with me professionally and view my work experience",
    },
    {
      name: "Resume",
      url: "assets/misc/resume.pdf",
      icon: "fas fa-file-alt",
      description: "Download my resume to learn more about my skills and experience",
    }
  ]
}
