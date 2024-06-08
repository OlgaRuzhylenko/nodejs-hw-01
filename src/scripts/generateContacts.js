import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

export const generateContacts = async (number) => {
  let contactsArr = [];
  //читаємо дані із файлу json
  const generatedContacts = await fs.readFile(PATH_DB, 'utf-8');
  contactsArr = JSON.parse(generatedContacts);

  const newContacts = [];
  for (let i = 0; i < number; i++) {
    newContacts.push(createFakeContact());
  }

  const updatedContacts = contactsArr.concat(newContacts);
  //записуємо в json
  await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts));
  return updatedContacts;
};

await generateContacts(6);
