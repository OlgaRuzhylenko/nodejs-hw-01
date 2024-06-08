import { PATH_DB } from '../constants/contacts.js';
import { getAllContacts } from './getAllContacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
  const contacts = await getAllContacts();
  const updatedContacts = contacts.filter(() => Math.random() >= 0.5);
  await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
  return updatedContacts;
};

await thanos();
