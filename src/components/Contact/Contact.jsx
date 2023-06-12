import PropTypes from 'prop-types';
import css from './Contact.module.css';
import { FaTrashAlt, FaUserAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts-slise';

function Contact({ name, number, contactId }) {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(contactId));
  };

  return (
    <>
      <div className={css.wrap}>
        <span className={css.icon}>
          <FaUserAlt />
        </span>
        <p>{name}</p>
      </div>
      <div className={css.wrap}>
        <p className={css.number}>{number}</p>
        <button
          className={css.button}
          type="button"
          onClick={handleDeleteContact}
        >
          <FaTrashAlt />
        </button>
      </div>
    </>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
};

export default Contact;
