import { Component } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import styles from './phone-book.module.css';

class PhoneBook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  isDublicate(name) {
    const normalizedTitle = name.toLowerCase();

    const { contacts } = this.state;
    const result = contacts.find(({ name }) => {
      return name.toLowerCase() === normalizedTitle;
    });

    return Boolean(result);
  }

  addContact = e => {
    e.preventDefault();
    const { name, number } = this.state;
    if (this.isDublicate(name, number)) {
      return Notiflix.Notify.failure(`${name} is already in contacts`); // Notify.Alert(`${title}. Author: ${author} is already ixist`)
    }

    this.setState(prevState => {
      const { name, number, contacts } = prevState;

      const newContacts = {
        id: nanoid(),
        name,
        number,
      };

      return { contacts: [newContacts, ...contacts], name: '', number: '' };
    });
  };

  removeContact(id) {
    this.setState(({ contacts }) => {
      const newContacts = contacts.filter(contact => contact.id !== id);
      return { contacts: newContacts };
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  getFilteredContacts() {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLowerCase();
    const result = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });

    return result;
  }

  render() {
    const { name, number } = this.state;
    const contacts = this.getFilteredContacts();

    const { handleChange, addContact } = this;

    const contactsList = contacts.map(({ id, name, number }) => (
      <li key={id} className={styles.contacts__item}>
        {name} : {number}.
        <button
          type="button"
          onClick={() => this.removeContact(id)}
          className={styles.button}
        >
          Delete
        </button>
      </li>
    ));

    return (
      <div>
        <div className={styles.wrapper}>
          <div>
            <form action="" onSubmit={addContact}>
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
          </div>
          <div className={styles.block}>
            <h4>Contacts</h4>
            <label>
              Find contacts
              <input
                name="filter"
                className={styles.input}
                onChange={handleChange}
              />
            </label>
            <ul className={styles.contacts__list}>{contactsList}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default PhoneBook;
