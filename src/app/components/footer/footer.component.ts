import { Component } from "@angular/core"

@Component({
  selector: "app-footer",
  template: `
    <footer class="footer">
      <div class="footer-container">
        <p>&copy; {{currentYear}} Designed by Timothy Kim. Most rights reserved.</p>
        <div class="social-links">
          <a href="https://github.com/TimKim712" target="_blank" aria-label="GitHub">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/timothy-kim712" target="_blank" aria-label="LinkedIn">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  `,
  styles: [
    `
    .footer {
      background-color: #ffffff;
      color: #64748b;
      padding: 1.5rem 0;
      border-top: 1px solid rgba(45, 143, 181, 0.18);
      font-family: "Inter", "Poppins", sans-serif;
      font-size: 0.88rem;
    }

    .footer-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-links a {
      color: #64748b;
      font-size: 1.3rem;
      transition: color 0.2s ease;
    }

    .social-links a:hover {
      color: #2d8fb5;
    }

    @media screen and (max-width: 768px) {
      .footer-container {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }
    }
  `,
  ],
})
export class FooterComponent {
  currentYear = new Date().getFullYear()
}
