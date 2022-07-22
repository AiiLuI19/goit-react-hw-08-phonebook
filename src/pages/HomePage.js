import { useSelector } from 'react-redux';
import { getUserName } from '../redux/auth/authSelectors';
import s from './page.module.css';
export default function HomePage() {
  const name = useSelector(getUserName);
  return (
    <div className={s.welcome}>
      <h1>{name} Welcome to PhoneBook! </h1>
    </div>
  );
}
