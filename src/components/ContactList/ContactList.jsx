import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import Contact from 'components/Contact/Contact';
import { deleteContact } from 'redux/contacts-slise';
import { getFilter, getContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const deleteContactById = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContactList = filteredContacts();

  return (
    <ul>
      {filteredContactList.map(({ id, name, number }) => {
        return (
          <li className={css.item} key={id}>
            <Contact
              name={name}
              number={number}
              onDeleteContact={deleteContactById}
              contactId={id}
            />
          </li>
        );
      })}
    </ul>
  );
};
