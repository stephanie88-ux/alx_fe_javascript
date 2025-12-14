 /* =============================
STEP 1: QUOTES + LOCAL STORAGE
============================= */


// Load quotes from localStorage or use defaults
let quotes = JSON.parse(localStorage.getItem('quotes')) || [
"The best way to get started is to quit talking and begin doing.",
"Success is not final, failure is not fatal: it is the courage to continue that counts.",
"Don’t let yesterday take up too much of today."
];


// Save quotes to localStorage
function saveQuotes() {
localStorage.setItem('quotes', JSON.stringify(quotes));
}

function showRandomQuote() {
const randomIndex = Math.floor(Math.random() * quotes.length);
const quote = quotes[randomIndex];


document.getElementById('quoteDisplay').textContent = quote;


// Save last viewed quote in sessionStorage
sessionStorage.setItem('lastQuote', quote);
}


// Restore last viewed quote (if exists)
const lastQuote = sessionStorage.getItem('lastQuote');
if (lastQuote) {
document.getElementById('quoteDisplay').textContent = lastQuote;
}


/* =============================
ADD NEW QUOTE
============================= */


function addQuote() {
const input = document.getElementById('newQuote');
const newQuote = input.value.trim();


if (newQuote === '') {
alert('Please enter a quote');
return;
}


quotes.push(newQuote);
saveQuotes();


input.value = '';
alert('Quote added successfully!');
}


function exportToJson() {
const jsonData = JSON.stringify(quotes, null, 2);
const blob = new Blob([jsonData], { type: 'application/json' });
const url = URL.createObjectURL(blob);


const a = document.createElement('a');
a.href = url;
a.download = 'quotes.json';
a.click();


URL.revokeObjectURL(url);
}


/* =============================
STEP 2: IMPORT FROM JSON
============================= */


function importFromJsonFile(event) {
const fileReader = new FileReader();


fileReader.onload = function (event) {
try {
const importedQuotes = JSON.parse(event.target.result);


if (!Array.isArray(importedQuotes)) {
throw new Error('Invalid JSON format');
}


quotes.push(...importedQuotes);
saveQuotes();
alert('Quotes imported successfully!');
} catch (error) {
alert('Error importing JSON file');
}
};


fileReader.readAsText(event.target.files[0]);
}
