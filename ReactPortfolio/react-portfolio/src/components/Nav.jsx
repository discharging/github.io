export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <h1>
            <a href="index.html">
              <span className="fa-solid fa-code" aria-hidden="true"></span>
              Kamlesh Pal
            </a>
          </h1>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#intro">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/kamlesh-pal-08688a203">
            <span className="fa-brands fa-linkedin" aria-hidden="true"></span>
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/discharging">
            <span
              className="fa-brands fa-square-github"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Github</span>
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1INrOyaMiMwVO4K5d_nELlc3Qp6bz9aJ_/view?usp=sharing"
            className="button"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
