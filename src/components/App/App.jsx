import css from './App.module.css';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps';
import { selectLoading, selectError } from '../../redux/contactsSlice';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <div>
        <h1 className={css.container}>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {error && <p>Error message</p>}
        {loading && <p>Loading contacts</p>}
        <ContactList />
      </div>
    </>
  );
}

export default App;
