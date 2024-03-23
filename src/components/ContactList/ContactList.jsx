import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

import { selectContacts } from '../../redux/contactsSlice';
import { useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filtersSlice';

function ContactList() {
  const selectedContacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const contacts = selectedContacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });
  return (
    <ul className={css.container}>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
