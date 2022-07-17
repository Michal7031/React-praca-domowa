import "./Navbar.css";

function Navbar({ logoProps }) {
  return (
    <nav className="navbar">
      <h1 className="logo">{logoProps}</h1>
      <ul className="menu">
        <li className="listItem">
          <a href="/">About me</a>
        </li>
        <li className="listItem">
          <a href="lista-postaci">Charakters list</a>
        </li>
        <li className="listItem">
          <a href="/todoList">Todo</a>
        </li>
        <li className="listItem">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
