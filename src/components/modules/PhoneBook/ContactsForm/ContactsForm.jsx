import { Component } from 'react';
import PropTypes from 'prop-types';

import initialState from './initialState';

import styles from '../phone-book.module.css';

class ContactsForm extends Component {
  state = { ...initialState };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
    this.reset();
  };

  reset() {
    this.setState({ ...initialState });
  }

  render() {
    const { name, number } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <form action="" onSubmit={handleSubmit}>
        <div className={styles.block}>
          <h4>Add contact</h4>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              className={styles.input}
              onChange={handleChange}
              value={name}
            />
          </label>
          <div>
            <label>
              Number
              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                className={styles.input}
                onChange={handleChange}
                value={number}
              />
            </label>
          </div>
          <button type="submit" className={styles.button}>
            Add contact
          </button>
        </div>
      </form>
    );
  }
}

ContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactsForm;
