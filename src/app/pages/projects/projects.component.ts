import { Component } from "@angular/core"

interface Project {
  id: number
  title: string
  date: string
  description: string
  technologies: string[]
  imageUrl: string
  githubUrl: string
}

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: "Phisher Fisher",
      date: "December 2024 - January 2025",
      description: "A Google Chrome extension that helps detect whether an email is suspected as phishing.",
      technologies: ["Vue", "Tailwind", "Flask", "Jupyter Notebook"],
      imageUrl: "assets/img/phisher-fisher.png",
      githubUrl: "https://github.com/TimKim712/Phisher_Fisher",
      
    },
    {
      id: 2,
      title: "HTTPico",
      date: "February 2025 - April 2025",
      description: "An HTTP server created from scratch that can either be locally hosted or ran from an Raspberry Pi Pico-W microcontroller.",
      technologies: ["C", "Cmake", "Raspberry Pi"],
      imageUrl: "assets/img/pico-w.png",
      githubUrl: "https://github.com/StickOnAStick/HTTPServer",
    },
    {
      id: 3,
      title: "Recipe Radar",
      date: "January 2025 - January 2025",
      description: "A website that generates recipes fulfilling meal criteria such as calories, protein, and dietary restrictions.",
      technologies: ["React", "Firebase", "Spoonacular API"],
      imageUrl: "assets/img/recipe-radar.png",
      githubUrl: "https://github.com/phatch9/Recipe-Radar",
    },
    {
      id: 4,
      title: "Cold Start",
      date: "January 2024 - May 2025",
      description: "A simple Spring Boot backend demonstrating the benefits of implementing caching.",
      technologies: ["Spring Boot", "Maven", "Docker", "Postgres", "Redis"],
      imageUrl: "",
      githubUrl: "https://github.com/TimKim712/Cold_Start",
    }
  ]
}
