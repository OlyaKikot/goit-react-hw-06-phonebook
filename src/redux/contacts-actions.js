import types from "./contacts-types";
import { nanoid } from "nanoid";

const addContact = (name, number) => ({
  type: types.ADD,
  payload: { name, number, id: nanoid() },
});

const deleteContact = (contactId) => ({
  type: types.DELETE,
  payload: contactId,
});

const changeFilter = (value) => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

const actions = { addContact, deleteContact, changeFilter };

export default actions;
