import types from "./contacts-types";
import { nanoid } from "nanoid";
import { createAction } from "@reduxjs/toolkit";

// ADD: "contacts/add",
// DELETE: "contacts/delete",
// CHANGE_FILTER: "contacts/filter",
const addContact = createAction("contacts/add", (name, number) => ({
  payload: { name, number, id: nanoid() },
}));

const deleteContact = createAction("contacts/delete");
const changeFilter = createAction("contacts/filter");

export default { addContact, deleteContact, changeFilter };
