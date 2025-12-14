// Array of quote objects with text and category
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
function showRandomQuote() {
  // Get a random index from the quotes array
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  
  // Get the quote display element
  const quoteDisplay = document.getElementById('quoteDisplay');
  
  // Update the DOM with the quote and category
  quoteDisplay.innerHTML = `
    <p style="font-size: 18px; font-style: italic; margin-bottom: 10px;">"${quote.text}"</p>
    <p style="color: #666; text-align: right;">Category: ${quote.category}</p>
  ;
}

// Function to create and add a new quote
function addQuote() {
  // Get input values
  const newQuoteText = document.getElementById('newQuoteText').value;
  const newQuoteCategory = document.getElementById('newQuoteCategory').value;
  
  // Validate inputs
  if (newQuoteText.trim() === "" || newQuoteCategory.trim() === "") {
    alert("Please enter both a quote and a category!");
    return;
  }
  
  // Create new quote object
  const newQuote = {
    text: newQuoteText,
    category: newQuoteCategory
  };
  
  // Add the new quote to the array
  quotes.push(newQuote);
  
  // Clear the input fields
  document.getElementById('newQuoteText').value = "";
  document.getElementById('newQuoteCategory').value = "";
  
  // Show a success message
  alert("Quote added successfully!");
  
  // Optionally, display the newly added quote
  const quoteDisplay = document.getElementById('quoteDisplay');
  quoteDisplay.innerHTML = `
    <p style="font-size: 18px; font-style: italic; margin-bottom: 10px;">"${newQuote.text}"</p>
    <p style="color: #666; text-align: right;">Category: ${newQuote.category}</p>
    <p style="color: green; margin-top: 10px;">✓ New quote added!</p>
  `;
}

// Function to create the add quote form (alternative implementation)
function createAddQuoteForm() {
  // This function creates the form dynamically if it doesn't exist in HTML
  const formContainer = document.createElement('div');
  formContainer.className = 'form-section';
  
  const heading = document.createElement('h2');
  heading.textContent = 'Add Your Own Quote';
  
  const quoteInput = document.createElement('input');
  quoteInput.id = 'newQuoteText';
  quoteInput.type = 'text';
  quoteInput.placeholder = 'Enter a new quote';
  
  const categoryInput = document.createElement('input');
  categoryInput.id = 'newQuoteCategory';
  categoryInput.type = 'text';
  categoryInput.placeholder = 'Enter quote category';
  
  const addButton = document.createElement('button');
  addButton.textContent = 'Add Quote';
  addButton.onclick = addQuote;
  
  // Append all elements
  formContainer.appendChild(heading);
  formContainer.appendChild(quoteInput);
  formContainer.appendChild(categoryInput);
  formContainer.appendChild(addButton);
  
  document.body.appendChild(formContainer);
}

// Event listener for the "Show New Quote" button
document.getElementById('newQuote').addEventListener('click', showRandomQuote);

// Display a random quote when the page loads
window.addEventListener('load', showRandomQuote);