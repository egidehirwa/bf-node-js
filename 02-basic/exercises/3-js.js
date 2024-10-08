// Fill in the blanks to complete the exercises.
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// Construct the path
const __filename = fileURLToPath(import.meta.url);
const PATH = dirname(__filename);

const contentToSave = 'Ajoute ces informations';
const filePath = path.join(PATH, 'example.txt');

// Write a File Synchronously:
try {
    fs.writeFile(filePath, contentToSave);
    console.log('Ce fichier a été mis à jour');
} catch (err) {
    console.error(err);
}

// Read a File Synchronously:
try {
    const data = fs.readFileSync('example.txt', 'utf-8');
    console.log('File contents synchronously:', data);
} catch (err) {
    console.error(err);
}

const contentToAppend = '\nThis is an appended line.';
try {
    fs.appendFileSync('example.txt', contentToAppend);
    console.log('Ce fichier vient de changer');
} catch (err) {
    console.error(err);
}

// Delete a File Synchronously:
try {
    fs.unlinkSync('example.txt');
    console.log('ce fichier est supprimé');
} catch (err) {
    console.error(err);
}
