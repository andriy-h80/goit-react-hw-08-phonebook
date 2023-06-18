import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import ContactList from '../components/ContactList/ContactList';
import ContactForm from '../components/ContactForm/ContactForm';
import { fetchContacts } from '../redux/contacts/operations';
import { selectIsLoading } from '../redux/contacts/selectors';
import Loader from '../components/Loader/Loader';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <ContactForm />
      {isLoading && <Loader />}
      <ContactList />
    </>
  );
}