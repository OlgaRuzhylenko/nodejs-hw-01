//сюди імпортуємо всі функції
import generateContacts from './scripts/generateContacts';
import getAllContacts from './scripts/getAllContacts';
import addOneContact from './scripts/addOneContact.js'

const invokeAction = async ({ action, number, ...data }) => {
  switch (action) {
    case 'generate':
      const allGeneratedContacts = await generateContacts(number);
      return console.log(allGeneratedContacts);
    case 'list':
      const allContacts = await getAllContacts();
      return console.log(allContacts);
    case 'add':
const newContact = await addOneContact(data);
return console.log(newContact);
  }
};
invokeAction({ action: 'generate' });
invokeAction({ action: 'list' });
invokeAction({ action: 'add' });
