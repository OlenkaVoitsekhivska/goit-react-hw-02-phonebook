import React, { Component } from 'react';

import ContactsList from './ContactsList/ContactsList';

import Form from './Form/Form';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  processSubmit = data => {
    let [check] = this.state.contacts.filter(el => el.name === data.name);
    if (check) {
      alert(`${check.name} is already in your contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, data],
      }));
    }
  };

  setFilter = e => {
    this.setState({ filter: e.target.value.toLowerCase() });
  };

  getFilteredList = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(el => el.name.toLowerCase().includes(filter));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    const filteredList = this.getFilteredList();

    return (
      <>
        <Form onSubmit={this.processSubmit} />
        <Filter onChange={this.setFilter} />
        <ContactsList
          list={filteredList}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
