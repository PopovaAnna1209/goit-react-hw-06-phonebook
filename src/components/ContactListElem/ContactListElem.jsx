// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/slice';


export const ContactListElem = ({ id, name, number }) => {
    const dispatch = useDispatch();

    return (
    <li>
        <p>
        {name}: {number}
        </p>
        <button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
        </button>
    </li>
    );
    }

// ContactListElem.propTypes = {
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//     onClick: PropTypes.func.isRequired,
// };