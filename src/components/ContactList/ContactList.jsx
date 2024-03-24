import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectFillerContacts } from '../../redux/contactsSlice';

function ContactList() {
  const contact = useSelector(selectFillerContacts);
  return (
    <ul className={css.container}>
      {contact.map(contact => (
        <li key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
