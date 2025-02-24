import { Link, Outlet } from 'react-router-dom';
import './App.css';

export function Header() {
  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar column-full">
            <span>
              <Link to="/">Code Journal</Link>
            </span>
            <Link to="/entries">Form Entries</Link>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
}
