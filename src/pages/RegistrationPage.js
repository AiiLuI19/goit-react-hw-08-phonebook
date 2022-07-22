import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/authOperations';
import s from './page.module.css';

export default function RegistrationPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
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

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(register({ name, email, password }));
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <div className={s.container}>
      <h2 className={s.name}>REGISTRATION</h2>
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </label>
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
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
