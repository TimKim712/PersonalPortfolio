import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { RouterModule } from "@angular/router"

import { AppComponent } from "./app.component"
import { NavbarComponent } from "./components/navbar/navbar.component"
import { FooterComponent } from "./components/footer/footer.component"
import { AboutComponent } from "./pages/about/about.component"
import { ProjectsComponent } from "./pages/projects/projects.component"
import { ExperienceComponent } from "./pages/experience/experience.component"
import { ReferencesComponent } from "./pages/references/references.component"

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ProjectsComponent,
    ExperienceComponent,
    ReferencesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        { path: "", component: AboutComponent },
        { path: "projects", component: ProjectsComponent },
        { path: "experience", component: ExperienceComponent },
        { path: "references", component: ReferencesComponent },
        { path: "**", redirectTo: "" },
      ],
      { useHash: true },
    ), // Using hash routing for GitHub Pages compatibility
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
