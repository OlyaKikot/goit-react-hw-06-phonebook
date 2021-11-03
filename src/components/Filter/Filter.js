import s from "./Filter.module.css";
import { connect } from "react-redux";

import contactsActions from "../../redux/contacts-actions";

function Filter({ value, onChange }) {
  return (
    <>
      <p className={s.text}>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </>
  );
}

const mapStateToProps = (state) => ({ value: state.contacts.filter });
const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(contactsActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
