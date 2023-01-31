import styles from '../phone-book.module.css';
import PropTypes from 'prop-types';

const ContactsFilter = ({ handleChange }) => {
  return (
    <label>
      Find contacts
      <input name="filter" className={styles.input} onChange={handleChange} />
    </label>
  );
};

ContactsFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
export default ContactsFilter;
