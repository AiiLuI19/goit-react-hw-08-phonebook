import PropTypes from 'prop-types';
import s from './Phonebook.module.css';
const ContactItem = ({ name, deleteContact, id, phone }) => (
  <>
    <div>&#128222; {name}: </div>
    <div className={s.number}> {phone} </div>
    <button
      className={s.btnClose}
      type="button"
      onClick={() => deleteContact(id)}
    >
      &#10008;
    </button>
  </>
);
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactItem;
