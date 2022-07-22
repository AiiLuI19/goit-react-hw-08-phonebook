import PropTypes from 'prop-types';
import s from './Phonebook.module.css';
const ContactItem = ({ name, deleteContact, id, phone }) => (
  <div className={s.listContacts}>
    <div>
      <span className={s.phoneImg}>&#9742;</span> {name}:{' '}
    </div>
    <div className={s.number}> {phone} </div>
    <button
      className={s.btnClose}
      type="button"
      onClick={() => deleteContact(id)}
    >
      &#10008;
    </button>
  </div>
);
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactItem;
