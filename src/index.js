//сюди імпортуємо всі функції
import generateContacts from './scripts/generateContacts';
import getAllContacts from './scripts/getAllContacts';
import addOneContact from './scripts/addOneContact.js';
import countContacts from './scripts/countContacts.js'

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
const contactsArrLength = await countContacts()
return console.log(contactsArrLength);
  }
};
invokeAction({ action: 'generate' });
invokeAction({ action: 'list' });
invokeAction({ action: 'add' });
invokeAction({ action: 'count' });
