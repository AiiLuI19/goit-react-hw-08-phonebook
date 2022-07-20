import ContactItem from './ContactItem';

import {
  useDeleteContactMutation,
  useGetContactQuery,
} from '../redux/contacts/contactsApi';
import { filterContacts } from 'redux/contacts/selectors';
import { useSelector } from 'react-redux/es/exports';
import s from './Phonebook.module.css';

const Contacts = () => {
  const { data: contacts, isFetching } = useGetContactQuery();
  const filteredContacts = useSelector(state => {
    return filterContacts(contacts, state);
  });

  const [deleteContact] = useDeleteContactMutation();

  const contactDelete = id => deleteContact(id);

  return (
    <>
      {isFetching ? <p>Loading...</p> : null}
      <ul className={s.list}>
        {filteredContacts.map(({ name, id, phone }) => (
          <li key={id} className={s.item}>
            <ContactItem
              name={name}
              deleteContact={contactDelete}
              id={id}
              phone={phone}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Contacts;
