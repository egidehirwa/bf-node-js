// Fill in the blanks to complete the exercises.
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// Construct the path
const __filename = fileURLToPath(import.meta.url);
const PATH = dirname(__filename);

// Write to the file
const contentToSave = 'Egide is here my friend';
const filePath = path.join(PATH, 'intro.txt');
fs.writeFile(filePath, contentToSave, 'utf8', (err) => {
    if (err) {
        console.error(err);
    }
    console.log('File saved');
});

// Read from the file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    }
    console.log('The file has been updated', data);
});

// Append content to the file
const contentToAppend = 'This content has been added';
fs.appendFile(filePath, contentToAppend, 'utf8', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('This file has been appended');
    }
});

// Delete a file
fs.unlink(filePath, (err) => {
    if (err) {
        console.error('Error deleting a file', err);
    } else {
        console.log('File has been deleted sucessfully !!');
    }
});
