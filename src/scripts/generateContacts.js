import { PATH_DB } from '../constants/contacts.js';
import {createFakeContact} from '../utils/createFakeContact.js'
import fs from 'fs/promises'


export const generateContacts = async (number) => {
    const generatedContacts = await fs.readFile(PATH_DB, 'utf-8')
    return JSON.parse(generatedContacts)
};

await generateContacts(5);


