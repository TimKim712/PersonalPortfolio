import { Component } from "@angular/core"

interface Experience {
  id: number
  role: string
  logo: string
  company: string
  period: string
  description: string[]
  technologies: string[]
}

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.css"],
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      id: 1,
      role: "Computing Intern",
      logo: "assets/img/Unknown-2.jpg",
      company: "Lawrence Livermore National Laboratory",
      period: "May 2025 - December 2025",
      description: [
        "Worked on a secure data archival platform for classified and unclassified experimental test data, supporting the storage, search, and traceability of over 350,000 records for multiple teams.",
        "Collaborated with senior developers to improve UI, API development, testing, and bi-weekly data transfers from unclassified to classified spaces",
      ],
      technologies: ["Angular", "TypeScript", "Python", "FastAPI", "MongoDB", "ElasticSearch"],
    },
    {
      id: 2,
      role: "Technology Intern",
      logo: "assets/img/bhn.jpg",
      company: "Blackhawk Network",
      period: "June 2024 - December 2024",
      description: [
        "Developed an image recognition service on E-Commerce platform to automatically evaluate user-submitted images for inappropriate content.",
        "Designed image processing workflow that would run image through a classification model, store important metadata, and display results.",
      ],
      technologies: ["AWS", "React", "TypeScript", "Python", "FastAPI"],
    },
    {
      id: 3,
      role: "Lab Assistant",
      logo: "assets/img/sjsu.png",
      company: "San José State University - College of Engineering",
      period: "January 2023 - August 2024",
      description: [
        "Mentored sections of 25 students on hands-on projects such as analysis of solar cell power outputs, construction of wind turbines, and VEX robot construction.",
        "Acquired experience with a range of tools throughout 5-week projects.",
        "Developed and refined instructional skills in both group and one-on-one settings.",
      ],
      technologies: ["VEX Robotics", "CAD", "Microsoft Excel", "Communication"],
    },
  ]
}
