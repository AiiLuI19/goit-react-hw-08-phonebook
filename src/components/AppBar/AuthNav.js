import { NavLink } from 'react-router-dom';
import s from './AppBar.module.css';
export default function AuthNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className={s.button} to="/register">
            Registration
          </NavLink>
        </li>
        <li>
          <NavLink className={s.button} to="/login">
            Log in
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
