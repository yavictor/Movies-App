function Header() {
  return (
    <nav>
      <div className="orange nav-wrapper">
        <a href="#!" class="brand-logo center">Movies App</a>
        <ul className="left hide-on-med-and-down">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">JavaScript</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
