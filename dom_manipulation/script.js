/* =============================
REQUIRED QUOTES ARRAY (OBJECTS)
============================= */
let quotes = JSON.parse(localStorage.getItem('quotes')) || [
const text = textInput.value.trim();
const category = categoryInput.value.trim();


if (text === '' || category === '') {
alert('Please enter both quote text and category');
return;
}


quotes.push({ text: text, category: category });
saveQuotes();


textInput.value = '';
categoryInput.value = '';


alert('Quote added successfully!');
}


/* =============================
EXPORT QUOTES TO JSON
============================= */


function exportToJson() {
const data = JSON.stringify(quotes, null, 2);
const blob = new Blob([data], { type: 'application/json' });
const url = URL.createObjectURL(blob);


const a = document.createElement('a');
a.href = url;
a.download = 'quotes.json';
a.click();


URL.revokeObjectURL(url);
}


/* =============================
IMPORT QUOTES FROM JSON
============================= */


function importFromJsonFile(event) {
const reader = new FileReader();


reader.onload = function (e) {
const importedQuotes = JSON.parse(e.target.result);


if (!Array.isArray(importedQuotes)) {
alert('Invalid JSON file');
return;
}


quotes.push(...importedQuotes);
saveQuotes();
alert('Quotes imported successfully!');
};


reader.readAsText(event.target.files[0]);
}


/* =============================
REQUIRED EVENT LISTENERS
============================= */


document.getElementById('newQuoteBtn').addEventListener('click', displayRandomQuote);
document.getElementById('addQuoteBtn').addEventListener('click', addQuote);
document.getElementById('exportBtn').addEventListener('click', exportToJson);
document.getElementById('importFile').addEventListener('change', importFromJsonFile);