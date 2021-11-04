import { combineReducers } from "redux";
import types from "./contacts-types";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./contacts-actions";

const initialState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];
function newContact(state, { payload }) {
  const findContact = state.find(({ name }) => name === payload.name);
  return !findContact
    ? [...state, payload]
    : alert(`${payload.name} is already in the contact`);
}

const items = createReducer(initialState, {
  [actions.addContact]: (state, action) => newContact(state, action),
  [actions.deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

// const items = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       if (state.some((contact) => contact.name === payload.name)) {
//         alert(payload.name + " is already in contacts");
//         return state;
//       }
//       const newContacts = [...state, payload];

//       return newContacts;

//     case types.DELETE:
//       const newContactsDelete = state.filter(
//         (contact) => contact.id !== payload
//       );

//       return newContactsDelete;
//     default:
//       return state;
//   }
// };
const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
