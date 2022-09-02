import { useSelector } from 'react-redux';
import {useGetContactsQuery} from '../../store/contactsOperations';
import Contact from './Contact';
import style from './ContactList.module.css';

function ContactList() {
  const {data} = useGetContactsQuery();
  const filter = useSelector(({ filter }) => filter)

  const filterContacts = () => {
    const normalizeFilter = filter.toLowerCase();

    return data.filter((contact) => contact.name.toLowerCase().includes(normalizeFilter));
  };


  return (
    <ul className={style.ul}>
      {data && filterContacts().map(contact => (
       <Contact {...contact} key={contact.id}/>
      ))}
      {data?.length === 0 && <h2 className={style.title}>
        Add your first contact :)
      </h2>}
    </ul>
  );
}

export default ContactList;

