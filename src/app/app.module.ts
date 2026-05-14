import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './pages/hero/hero.component';
import { AboutComponent } from './pages/about/about.component';
import { EducationComponent } from './pages/education/education.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReferencesComponent } from './pages/references/references.component';
import { ScrollAnimateDirective } from './directives/scroll-animate.directive';

@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,
    FooterComponent,
    HomeComponent,
    HeroComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    ReferencesComponent,
    ProjectsComponent,
    ScrollAnimateDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
