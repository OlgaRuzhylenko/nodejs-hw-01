//сюди імпортуємо всі функції
import generateContacts from './scripts/generateContacts';
import getAllContacts from './scripts/getAllContacts'

const invokeAction = async ({ action, number }) => {
  switch (action) {
    case 'generate':
      const allGeneratedContacts = await generateContacts(number);
      return console.log(allGeneratedContacts);
    case 'list':
        const allContacts = await getAllContacts();
        return console.log(allContacts);
        case 'add':
            
  }
};
invokeAction({ action: 'generate' });
invokeAction({ action: 'list' });
invokeAction({ action: 'add', });
