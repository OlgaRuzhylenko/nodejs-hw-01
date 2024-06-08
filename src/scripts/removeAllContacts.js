import { PATH_DB } from '../constants/contacts.js';
import {getAllContacts} from './getAllContacts.js';
import fs from 'fs/promises';


export const removeAllContacts = async () => {
    const contacts = await getAllContacts();
    contacts.length = 0;
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
return contacts
};

await removeAllContacts();
