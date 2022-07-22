import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/authOperations';
import s from './page.module.css';
export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(logIn({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.container}>
      <h2 className={s.name}>LOGIN</h2>
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>
          Email
          <input
            className={s.input}
            type="text"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
            value={email}
            onChange={handleChange}
          />
        </label>
        <label className={s.label}>
          Password
          <input
            className={s.input}
            type="password"
            name="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
            required
            value={password}
            onChange={handleChange}
          />
        </label>
        <div className={s.btnWrap}>
          <button type="submit" className={s.btn}>
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}
