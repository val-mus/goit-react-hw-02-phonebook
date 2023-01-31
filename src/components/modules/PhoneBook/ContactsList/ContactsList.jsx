import styles from '../phone-book.module.css';
import PropTypes from 'prop-types';

const ContactsList = ({ removeItem, items }) => {
  const contactsList = items.map(({ id, name, number }) => (
    <li key={id} className={styles.contacts__item}>
      {name} : {number}.
      <button
        type="button"
        onClick={() => removeItem(id)}
        className={styles.button}
      >
        Delete
      </button>
    </li>
  ));
  return <ul className={styles.contacts__list}>{contactsList}</ul>;
};

ContactsList.defaultProps = {
  items: [],
};

ContactsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  removeItem: PropTypes.func.isRequired,
};

export default ContactsList;
