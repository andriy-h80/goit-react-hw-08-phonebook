import { useDispatch } from "react-redux";
import { useState } from "react";
import PropTypes from 'prop-types';
import { ContactsListItemStyled, ContactName, ButtonDelete, ButtonEdit } from './ContactListItem.styled';
import { deleteContact } from "../../redux/contacts/operations";
import ContactEdit from '../ContactEdit/ContactEdit';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ContactsListItemStyled>
      <ContactName>
        {name}: {number}
      </ContactName>
      <ButtonEdit type="button" aria-label="edit" onClick={openModal}>
        Edit
      </ButtonEdit>
      <ButtonDelete type="button" aria-label="delete" onClick={handleDelete}>
        Delete
      </ButtonDelete>
      {isModalOpen && (
        <ContactEdit
          id={id}
          name={name}
          number={number}
          onClose={closeModal}
          open={isModalOpen}
        />
      )}
    </ContactsListItemStyled>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactListItem;
