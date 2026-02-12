import { useDispatch } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { fetchContacts } from "./redux/contactsOps";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>

      <ContactForm />

      <SearchBox />

      <ContactList />
    </div>
  );
}

export default App;
