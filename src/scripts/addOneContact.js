import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { getAllContacts } from './getAllContacts.js';
import fs from 'fs/promises';

export const addOneContact = async () => {
  const contacts = await getAllContacts();
  const newContact = createFakeContact();
  contacts.push(newContact);
  await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
  return newContact;
};

await addOneContact();
