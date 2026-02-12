import { useSelector } from "react-redux";
import css from "./ContactList.module.css";

import Contact from "../Contact/Contact";

import { selectFilteredContacts } from "../../redux/contactsSlice";

function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);

  const { loading, error } = useSelector((state) => state.contacts);

  return (
    <div className={css.container}>
      <h2 className={css.sectionTitle}>Contacts</h2>

      {loading ? (
        <p className={css.message}>Loading...</p>
      ) : error ? (
        <p className={css.message}>Error: {error}</p>
      ) : visibleContacts.length === 0 ? (
        <p className={css.emptyMessage}>
          {visibleContacts.length === 0 && "No contact yet."}
        </p>
      ) : (
        <ul className={css.list}>
          {visibleContacts.map((contact) => (
            <li key={contact.id} className={css.listItem}>
              <Contact
                name={contact.name}
                number={contact.number}
                id={contact.id}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ContactList;
