function ContactsItem({ id, name, number, onDeleteContact }) {
  return (
    <li>
      {name}
      <p>{number}</p>
      <button onClick={onDeleteContact}>delete</button>
    </li>
  );
}

export default ContactsItem;
