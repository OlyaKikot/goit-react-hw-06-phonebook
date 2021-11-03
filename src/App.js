import ContactForm from "./components/ContactForm/";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import s from "./App.module.css";

function App() {
  // useEffect(() => {
  //   const parsedContacts = JSON.parse(localStorage.getItem("contacts"));

  //   setContacts(parsedContacts ?? []);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <>
      <h1 className={s.mainTitle}>Phonebook</h1>
      <ContactForm />
      <Filter />
      <h2 className={s.title}>Contacts</h2>
      <ContactList />
    </>
  );
}

export default App;
