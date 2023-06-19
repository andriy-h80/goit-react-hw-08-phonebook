import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import { ContactsListItemStyled, ContactName, ButtonDelete, ButtonEdit } from './ContactListItem.styled';
import { deleteContact, updateContact } from "../../redux/contacts/operations";

const ContactListItem = ({ contactId, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contactId));
  const handleEdit = () => dispatch(updateContact(contactId));

  return (
    <ContactsListItemStyled>
      <ContactName>
        {name}: {number}
      </ContactName>
      <ButtonEdit type="button" aria-label="edit" onClick={handleEdit}>
        Edit
      </ButtonEdit>
      <ButtonDelete type="button" aria-label="delete" onClick={handleDelete}>
        Delete
      </ButtonDelete>
    </ContactsListItemStyled>
  );
};

ContactListItem.propTypes = {
  contactId: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactListItem;
