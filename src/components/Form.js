import { useState } from 'react';
import s from './Phonebook.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  useGetContactQuery,
  useAddContactMutation,
} from '../redux/contacts/contactsApi';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContacts] = useAddContactMutation();
  const { data } = useGetContactQuery();

  const formSubmitHandler = contact => {
    if (
      data?.some(
        ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      Notify.warning(`${contact.name} is already in contacts`);
      return;
    }
    addContacts(contact);
  };

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const contact = {
      name,
      number,
    };

    formSubmitHandler(contact);
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <div className={s.btnWrap}>
        <button className={s.btn} type="submit">
          Add contact
        </button>
      </div>
    </form>
  );
};

export default Form;
