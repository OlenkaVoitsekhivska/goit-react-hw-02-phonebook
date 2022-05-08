import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import style from './Form.module.css';

class Form extends Component {
  state = {
    id: '',
    name: '',
    number: '',
  };

  handleInputChange = e => {
    this.loginInputId = nanoid();

    this.setState({
      id: this.loginInputId,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);

    setTimeout(() => {
      e.target.elements.name.value = '';
      e.target.elements.number.value = '';
    }, 2000);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Phonebook</h2>
        <label htmlFor="">
          Name
          <input
            className={style.nameInput}
            onChange={this.handleInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor="">
          Number
          <input
            className={style.numberInput}
            onChange={this.handleInputChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={style.submitBtn}>
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
