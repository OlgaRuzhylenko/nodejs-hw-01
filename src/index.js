//сюди імпортуємо всі функції
import generateContacts from './scripts/generateContacts';
import getAllContacts from './scripts/getAllContacts';
import addOneContact from './scripts/addOneContact.js';
import countContacts from './scripts/countContacts.js';
import removeAllContacts from './scripts/removeAllContacts.js';
import thanos from './scripts/thanos.js';

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
    case 'count':
      const contactsArrLength = await countContacts();
      return console.log(contactsArrLength);
    case 'remove':
      const emptyArrContacts = await removeAllContacts();
      return thanos.log(emptyArrContacts);
    case 'thanos':
      const updatedContacts = await thanos();
      return console.log(updatedContacts);
  }
};
invokeAction({ action: 'generate' });
invokeAction({ action: 'list' });
invokeAction({ action: 'add' });
invokeAction({ action: 'count' });
invokeAction({ action: 'remove' });
invokeAction({ action: 'thanos' });
