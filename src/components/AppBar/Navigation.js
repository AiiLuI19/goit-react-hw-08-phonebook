import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import { NavLink } from 'react-router-dom';
import s from './AppBar.module.css';

export default function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <nav className={s.Nav}>
      <NavLink to="/" className={s.Logo}>
        Phone<span className={s.logo}>Book</span>
      </NavLink>
      <div className={s.page}>
        <ul className={s.List}>
          <li>
            <NavLink className={s.item} to="/">
              Home
            </NavLink>
          </li>
          <li>
            {isLoggedIn && (
              <NavLink className={s.item} to="/contacts">
                Contacts
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
