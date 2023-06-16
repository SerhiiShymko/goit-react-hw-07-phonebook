import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import Contact from 'components/Contact/Contact';
import { selectFilteredContacts } from 'redux/contacts/contacts-selectors';
import { deleteContact } from 'redux/contacts/contacts-operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li className={css.item} key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.phone}
              onDeleteContact={onDeleteContact}
              contactId={contact.id}
            />
          </li>
        );
      })}
    </ul>
  );
};
