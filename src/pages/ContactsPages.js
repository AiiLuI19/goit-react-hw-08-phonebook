import Form from '../components/Form';
import Contacts from '../components/Contacts';
import Filter from '../components/Filter';

import s from '../components/Phonebook.module.css';

export default function ContactsPages() {
  return (
    <div className={s.container}>
      <h1 className={s.name}>PhoneBook</h1>
      <Form />

      <h2 className={s.name}>Contacts</h2>
      <Filter />
      <Contacts />
    </div>
  );
}
