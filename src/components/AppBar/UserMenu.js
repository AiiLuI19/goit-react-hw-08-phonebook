import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { getUserName } from '../../redux/auth/authSelectors';
import s from './AppBar.module.css';
export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  return (
    <>
      <div className={s.userMenu}>
        <div className={s.img}>
          <img
            src={require('../../img/depositphotos_391045336-stock-illustration-user-vector-glyph-color-icon.jpg')}
            alt="avatar"
            width={30}
            height={30}
          />
        </div>

        <p>Hello, {name} </p>
        <button
          className={s.button}
          type="button"
          onClick={() => dispatch(logOut())}
        >
          Log out
        </button>
      </div>
    </>
  );
}
