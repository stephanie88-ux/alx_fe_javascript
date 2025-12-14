 // Array of quote objects with text and category properties
let quotes = [
  { text: "The only way to do great work is to love what you do.", category: "Inspiration" },
  { text: "Life is what happens when you're busy making other plans.", category: "Life" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", category: "Dreams" },
  { text: "It is during our darkest moments that we must focus to see the light.", category: "Motivation" },
  { text: "Be yourself; everyone else is already taken.", category: "Individuality" },
  { text: "In the end, we only regret the chances we didn't take.", category: "Life" },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", category: "Wisdom" }
];

// Function to display a random quote
function displayRandomQuote() {
  // Select a random quote from the array
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  
  // Get the quote display element
  const quoteDisplay = document.getElementById('quoteDisplay');
  
  // Update the DOM with the selected quote
  quoteDisplay.innerHTML = `<p>"${quote.text}"</p><p><em>Category: ${quote.category}</em></p>`;
}

// Function to add a new quote
function addQuote() {
  // Get input values from the form
  const newQuoteText = document.getElementById('newQuoteText').value;
  const newQuoteCategory = document.getElementById('newQuoteCategory').value;
  
  // Validate that both fields are filled
  if (newQuoteText.trim() === "" || newQuoteCategory.trim() === "") {
    alert("Please enter both a quote and a category!");
    return;
  }
  
  // Create a new quote object
  const newQuote = {
    text: newQuoteText,
    category: newQuoteCategory
  };
  
  // Add the new quote to the quotes array
  quotes.push(newQuote);
  
  // Clear the input fields
  document.getElementById('newQuoteText').value = "";
  document.getElementById('newQuoteCategory').value = "";
  
  // Provide feedback to the user
  alert("Quote added successfully!");
  
  // Display the newly added quote
  displayRandomQuote();
}

// Function to create the add quote form dynamically (alternative implementation)
function createAddQuoteForm() {
  // Create form container
  const formContainer = document.createElement('div');
  
  // Create input for quote text
  const quoteInput = document.createElement('input');
  quoteInput.id = 'newQuoteText';
  quoteInput.type = 'text';
  quoteInput.placeholder = 'Enter a new quote';
  
  // Create input for quote category
  const categoryInput = document.createElement('input');
  categoryInput.id = 'newQuoteCategory';
  categoryInput.type = 'text';
  categoryInput.placeholder = 'Enter quote category';
  
  // Create add button
  const addButton = document.createElement('button');
  addButton.textContent = 'Add Quote';
  addButton.onclick = addQuote;
  
  // Append elements to form container
  formContainer.appendChild(quoteInput);
  formContainer.appendChild(categoryInput);
  formContainer.appendChild(addButton);
  
  // Append form to body
  document.body.appendChild(formContainer);
}

// Event listener for the "Show New Quote" button
document.getElementById('newQuote').addEventListener('click', displayRandomQuote);

// Display a random quote when the page loads
window.addEventListener('load', displayRandomQuote);