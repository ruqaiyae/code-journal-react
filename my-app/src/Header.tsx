import { Link, Outlet } from 'react-router-dom';
import './App.css';
export function Header() {
  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar column-full">
            <span>Code Journal</span>
            <Link to="/entries">Form Entries</Link>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
}
