// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, getFilter } from '../../redux/slice';
import './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const changeFilterInput = e => {
    dispatch(setFilter(e.target.value));
  };

  return ( 
    <label>
    Find contacts by name
    <input
      type="text"
      name={filter}
      onChange={changeFilterInput}
    />
  </label>
  );
};
  

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   changeFilterInput: PropTypes.func.isRequired,
// };