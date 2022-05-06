import ContactsItem from 'components/ContactsItem/ContactsItem';

function ContactsList({ list, onDeleteContact }) {
  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {list.map(({ id, name, number }) => {
          return (
            <ContactsItem
              key={id}
              name={name}
              number={number}
              onDeleteContact={() => onDeleteContact(id)}
            />
          );
        })}
      </ul>
    </>
  );
}

export default ContactsList;
