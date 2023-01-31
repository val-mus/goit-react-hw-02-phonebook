import { Component } from 'react';

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

  removeContact(id) {
    this.setState(({ contacts }) => {
      const newContacts = contacts.filter(contact => contact.id !== id);
      return { contacts: newContacts };
    });
  }

  render() {
    const { contacts } = this.state;

    const contactsList = contacts.map(({ id, name, number }) => (
      <li key={id} className={styles.contacts__item}>
        {name}:{number}.
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
        <h3>Phonebook</h3>
        <div className={styles.wrapper}>
          <div>
            <form action="">
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
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                className={styles.input}
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
