import { combineReducers } from "redux";
import types from "./contacts-types";

const parsedContacts = JSON.parse(localStorage.getItem("contacts"));
const initialState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const items = (state = parsedContacts || initialState, { type, payload }) => {
  switch (type) {
    case types.ADD:
      if (state.some((contact) => contact.name === payload.name)) {
        alert(payload.name + " is already in contacts");
        return state;
      }
      const newContacts = [...state, payload];
      localStorage.setItem("contacts", JSON.stringify(newContacts));
      return newContacts;

    case types.DELETE:
      const newContactsDelete = state.filter(
        (contact) => contact.id !== payload
      );
      localStorage.setItem("contacts", JSON.stringify(newContactsDelete));
      return newContactsDelete;
    default:
      return state;
  }
};
const filter = (state = "", { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};
export default combineReducers({
  items,
  filter,
});
