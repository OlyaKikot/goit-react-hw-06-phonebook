import PropTypes from "prop-types";
import s from "../ContactListItem/ContactListItem.module.css";
import { connect } from "react-redux";
import contactsActions from "../../../redux/contacts-actions";

function ContactListItem({ contact, onDelete }) {
  return (
    <div className={s.container}>
      <li className={s.item}>
        {contact.name}: {contact.number}
      </li>
      <button
        className={s.button}
        id={contact.id}
        type="button"
        onClick={() => onDelete(contact.id)}
      >
        Delete
      </button>
    </div>
  );
}

ContactListItem.propTypes = {
  contact: PropTypes.exact({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

const visibleContacts = (items, filter) => {
  return items.filter((contact) =>
    contact.name.toLowerCase().includes(filter.trim().toLowerCase())
  );
};

const mapStateToProps = (state) => {
  const { filter, items } = state.contacts;

  return { visibleContacts: visibleContacts(items, filter) };
};
const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => {
    return dispatch(contactsActions.deleteContact(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
