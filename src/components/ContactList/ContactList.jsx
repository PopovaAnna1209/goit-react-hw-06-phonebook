// import PropTypes from 'prop-types';
import './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilter, deleteContact } from '../../redux/slice';
import { ContactListElem } from '../ContactListElem/ContactListElem';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const findContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = findContacts();



  return (
  <ul>
    {filteredContacts.map(({ id, name, number }) => {
      return (
        <ContactListElem
            key={id}
            id={id}
            name={name}
            number={number}
            onClick={deleteContact}
          />
      );
    })}
  </ul>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
// })),
//   deleteContact: PropTypes.func.isRequired,
// };