import { Component } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

import ContactsForm from './ContactsForm/ContactsForm';
import ContactsList from './ContactsList/ContactsList';
import ContactsFilter from './ContactsFilter/ContactsFilter';

import styles from './phone-book.module.css';

class PhoneBook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  isDuplicate(name) {
    const normalizedTitle = name.toLowerCase();

    const { contacts } = this.state;
    const result = contacts.find(({ name }) => {
      return name.toLowerCase() === normalizedTitle;
    });

    return Boolean(result);
  }

  addContact = ({ name, number }) => {
    if (this.isDuplicate(name)) {
      return Notiflix.Notify.failure(`${name} is already in contacts`);
    }
    this.setState(prevState => {
      const { contacts } = prevState;

      const newContacts = {
        id: nanoid(),
        name,
        number,
      };

      return { contacts: [newContacts, ...contacts] };
    });
  };

  removeContact = id => {
    this.setState(({ contacts }) => {
      const newContacts = contacts.filter(contact => contact.id !== id);
      return { contacts: newContacts };
    });
  };

  handleFilter = ({ target }) => {
    this.setState({
      filter: target.value,
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
    const contacts = this.getFilteredContacts();
    const { handleFilter, addContact, removeContact } = this;

    return (
      <div>
        <div className={styles.wrapper}>
          <div>
            <ContactsForm onSubmit={addContact} />
          </div>
          <div className={styles.block}>
            <h4>Contacts</h4>
            <ContactsFilter handleChange={handleFilter} />
            <ContactsList removeItem={removeContact} items={contacts} />
          </div>
        </div>
      </div>
    );
  }
}

export default PhoneBook;
