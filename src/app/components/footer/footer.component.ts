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
      background-color: #1a1a2e;
      color: white;
      padding: 1.5rem 0;
      margin-top: 2rem;
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
      color: white;
      font-size: 1.5rem;
      transition: color 0.3s ease;
    }
    
    .social-links a:hover {
      color: #4cc9f0;
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
