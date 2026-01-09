import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const scrollRatio = scrollTop / docHeight;
    const backgroundOffset = scrollRatio * 100;

    document.body.style.backgroundPosition =
      `0% ${backgroundOffset}%`;
  }
}
