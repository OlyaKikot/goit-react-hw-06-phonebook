import { connect } from "react-redux";
import s from "./ContactList.module.css";
import ContactListItem from "./ContactListItem/ContactListItem";

function ContactList({ visibleContacts }) {
  return (
    <>
      <ul className={s.list}>
        {visibleContacts.map((contact) => (
          <ContactListItem contact={contact} key={contact.id} />
        ))}
      </ul>
    </>
  );
}

const visibleContacts = (items, filter) => {
  return items.filter((contact) =>
    contact.name.toLowerCase().includes(filter.trim().toLowerCase())
  );
};

const mapStateToProps = (state) => {
  const { filter, items } = state.contacts;

  return { visibleContacts: visibleContacts(items, filter) };
};

export default connect(mapStateToProps, null)(ContactList);
