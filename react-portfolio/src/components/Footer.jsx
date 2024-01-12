export default function Footer() {
  return (
    <footer>
      <h2>Kamlesh Pal &middot; Developer</h2>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/kamlesh-pal-08688a203">
            <span className="fab fa-linkedin" aria-hidden="true"></span>
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/discharging">
            <span className="fab fa-github-square" aria-hidden></span>
            <span className="sr-only">Github</span>
          </a>
        </li>
        <li>
          <a href="mailto:kamlehiit5@gmail.com">
            <span className="fas fa-envelope" aria-hidden="true"></span>
            <span className="sr-only">Email</span>
          </a>
        </li>
      </ul>

      <p>
        <small>&copy; 2024 Kamlesh Pal. All rights reserved.</small>
      </p>
    </footer>
  );
}
