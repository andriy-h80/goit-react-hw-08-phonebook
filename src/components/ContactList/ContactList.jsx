import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from '../../redux/contacts/operations'
import { selectContacts, selectIsLoading, selectError, selectFilter } from "../../redux/contacts/selectors";
import ContactListItem from '../ContactListItem/ContactListItem';
import { ContactListStyled } from './ContactList.styled';
import Loader from '../Loader/Loader';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilter);

  // Отримуємо частини стану
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <ContactListStyled>
      {isLoading && <Loader />}
      {error && <p>{"Oops, mistake... Please try again"}</p>}
      {contacts.filter(contact => 
        contact.name.toLowerCase().includes(filteredContacts.toLowerCase()))
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
         >
        </ContactListItem>
      ))}
    </ContactListStyled>
  );
};

export default ContactList;
