import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { selectContacts } from '../../redux/contacts/selectors';
import { toast } from 'react-hot-toast';
import { Form, ButtonAdd } from './ContactForm.styled';

const ContactForm = () => {

    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const handleSubmit = event => {
        event.preventDefault();
        const { name, number } = event.currentTarget;

        const isContactExist = contacts.some(
            contact => contact.name.toLowerCase() === name.value.toLowerCase()
        );
        
        if (isContactExist) {
            // alert(`${name.value} is already in contacts`);
            toast.error(`${name.value} is already in contacts`);
            event.currentTarget.reset();
            return;
        }

        dispatch(addContact({name: name.value, number: number.value}));
        event.currentTarget.reset();
      };

    return (
        <Form onSubmit={handleSubmit}>
            <label htmlFor="name">
                Name: 
            </label>
            <input
            type="text"
            name="name"
            pattern="^[a-zA-Z\s]+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" required
            id="name"
            />

            <label htmlFor="number">
                Number: 
            </label>
            <input
            type="tel"
            name="number"
            pattern="^[0-9]+$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" required
            id="number"
            />  

            <ButtonAdd type='submit' aria-label="Add contact">Add contact</ButtonAdd>          
        </Form>
    )
}

export default ContactForm;
