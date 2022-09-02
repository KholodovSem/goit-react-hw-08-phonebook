import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useAddContactMutation, useGetContactsQuery } from '../../store/contactsOperations';
import style from './Form.module.css';
import 'react-toastify/dist/ReactToastify.css';

function AddContactForm() {
  const { data } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {

      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = e.currentTarget;
    const nameContact = name.value;
    const phoneNumber = number.value;
    const contact = {
      name: nameContact,
      number: phoneNumber,
    };

    if (data.find(({ name }) => name.toLowerCase() === nameContact.toLowerCase())) {
      return toast.error(`You already have ${nameContact} in your contacts book`);
    }

    addContact(contact);
    toast.success(`${nameContact} is successfully added to your contacts book`);
    updateState();
  };

  const updateState = () => {
    setName('');
    setNumber('');
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)} className={style.form}>
      <label className={style.label}>
        <p className={style.text}>Name</p>
        <input
          onChange={handleChange}
          value={name}
          type='text'
          name='name'
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={style.label}>
        <p className={style.text}>Phone</p>
        <input
          onChange={handleChange}
          value={number}
          type='tel'
          name='number'
          pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
          title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
          required
        />
      </label>
      <button type='submit' className={style.button}>Add</button>
      <ToastContainer />
    </form>
  );
}

export default AddContactForm;

