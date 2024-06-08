//сюди імпортуємо всі функції
import generateContacts from './scripts/generateContacts';

const invokeAction = async ({ action }) => {
  switch (action) {
    case 'list':
      const allContacts = await generateContacts();
      return console.log(allContacts);
  }
};
invokeAction({ action: 'list' });
