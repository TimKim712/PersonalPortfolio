import { Component } from "@angular/core"

@Component({
  selector: "app-root",
  template: `
    <app-navbar></app-navbar>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styles: [
    `
    main {
      min-height: calc(100vh - 140px);
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
  `,
  ],
})
export class AppComponent {
  title = "portfolio"
}
