import AddContactForm from '../ContactForm/Form';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import style from './ContactBook.module.css';

function ContactBook() {

  return (
    <section className={style.section}>
      <div className={style.app}>
        <h1 className={style.title}>Phonebook</h1>
        <AddContactForm />
        <h2 className={style.titleContact}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </section>
  );
}

export default ContactBook;

