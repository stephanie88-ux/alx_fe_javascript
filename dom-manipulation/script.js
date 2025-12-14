 // Initialize quotes array - will be populated from local storage or defaults
let quotes = [];
let selectedCategory = 'all'; // Track the currently selected category

// Function to load quotes from local storage
function loadQuotes() {
  const storedQuotes = localStorage.getItem('quotes');
  if (storedQuotes) {
    quotes = JSON.parse(storedQuotes);
  } else {
    // Default quotes if none exist in local storage
    quotes = [
      { text: "The only way to do great work is to love what you do.", category: "Inspiration" },
      { text: "Life is what happens when you're busy making other plans.", category: "Life" },
      { text: "The future belongs to those who believe in the beauty of their dreams.", category: "Dreams" },
      { text: "It is during our darkest moments that we must focus to see the light.", category: "Motivation" },
      { text: "Be yourself; everyone else is already taken.", category: "Individuality" },
      { text: "In the end, we only regret the chances we didn't take.", category: "Life" },
      { text: "The best time to plant a tree was 20 years ago. The second best time is now.", category: "Wisdom" }
    ];
    saveQuotes();
  }
}

// Function to save quotes to local storage
function saveQuotes() {
  localStorage.setItem('quotes', JSON.stringify(quotes));
}

// Function to populate categories in the dropdown
function populateCategories() {
  const categoryFilter = document.getElementById('categoryFilter');
  
  // Extract unique categories from quotes array using map
  const allCategories = quotes.map(quote => quote.category);
  const uniqueCategories = [...new Set(allCategories)];
  
  // Clear existing options
  categoryFilter.innerHTML = '<option value="all">All Categories</option>';
  
  // Add category options dynamically
  uniqueCategories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
  
  // Restore last selected filter from local storage
  const lastSelectedCategory = localStorage.getItem('selectedCategory');
  if (lastSelectedCategory) {
    categoryFilter.value = lastSelectedCategory;
    selectedCategory = lastSelectedCategory;
  }
}

// Function to filter quotes based on selected category
function filterQuotes() {
  const categoryFilter = document.getElementById('categoryFilter');
  selectedCategory = categoryFilter.value;
  
  // Save selected category to local storage
  localStorage.setItem('selectedCategory', selectedCategory);
  
  // Display a quote from the filtered category
  displayRandomQuote();
}

// Function to display a random quote (filtered by category if applicable)
function displayRandomQuote() {
  // Filter quotes based on selected category
  let filteredQuotes = quotes;
  if (selectedCategory !== 'all') {
    filteredQuotes = quotes.filter(quote => quote.category === selectedCategory);
  }
  
  if (filteredQuotes.length === 0) {
    document.getElementById('quoteDisplay').innerHTML = '<p>No quotes available for this category.</p>';
    return;
  }

  // Select a random quote from filtered array
  const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
  const quote = filteredQuotes[randomIndex];
  
  // Get the quote display element
  const quoteDisplay = document.getElementById('quoteDisplay');
  
  // Update the DOM with the selected quote
  quoteDisplay.innerHTML = `<p>"${quote.text}"</p><p><em>Category: ${quote.category}</em></p>`;
  
  // Store last viewed quote in session storage
  sessionStorage.setItem('lastViewedQuote', JSON.stringify(quote));
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
  
  // Save to local storage
  saveQuotes();
  
  // Update categories in dropdown if new category was added
  populateCategories();
  
  // Clear the input fields
  document.getElementById('newQuoteText').value = "";
  document.getElementById('newQuoteCategory').value = "";
  
  // Provide feedback to the user
  alert("Quote added successfully!");
  
  // Display the newly added quote
  displayRandomQuote();
}

// Function to export quotes to JSON file
function exportToJsonFile() {
  // Convert quotes array to JSON string
  const dataStr = JSON.stringify(quotes, null, 2);
  
  // Create a Blob from the JSON string
  const blob = new Blob([dataStr], { type: 'application/json' });
  
  // Create a download link
  const url = URL.createObjectURL(blob);
  const downloadLink = document.createElement('a');
  downloadLink.href = url;
  downloadLink.download = 'quotes.json';
  
  // Trigger the download
  downloadLink.click();
  
  // Clean up the URL object
  URL.revokeObjectURL(url);
}

// Function to import quotes from JSON file
function importFromJsonFile(event) {
  const fileReader = new FileReader();
  
  fileReader.onload = function(event) {
    try {
      const importedQuotes = JSON.parse(event.target.result);
      
      // Validate that imported data is an array
      if (!Array.isArray(importedQuotes)) {
        alert('Invalid JSON format. Please upload a valid quotes array.');
        return;
      }
      
      // Add imported quotes to existing quotes
      quotes.push(...importedQuotes);
      
      // Save to local storage
      saveQuotes();
      
      // Update categories dropdown with any new categories
      populateCategories();
      
      alert('Quotes imported successfully!');
      
      // Display a random quote from the updated collection
      displayRandomQuote();
    } catch (error) {
      alert('Error reading file. Please ensure it is a valid JSON file.');
      console.error('Import error:', error);
    }
  };
  
  // Read the file as text
  fileReader.readAsText(event.target.files[0]);
}

// Function to create the add quote form dynamically (alternative implementation)
function createAddQuoteForm() {
  // Create form container
  const formContainer = document.createElement('div');
  formContainer.className = 'form-section';
  
  // Create heading
  const heading = document.createElement('h2');
  heading.textContent = 'Add Your Own Quote';
  
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
  formContainer.appendChild(heading);
  formContainer.appendChild(quoteInput);
  formContainer.appendChild(categoryInput);
  formContainer.appendChild(addButton);
  
  // Append form to body
  document.body.appendChild(formContainer);
}

// Event listener for the "Show New Quote" button
document.getElementById('newQuote').addEventListener('click', displayRandomQuote);

// Initialize the application
window.addEventListener('load', function() {
  // Load quotes from local storage
  loadQuotes();
  
  // Populate categories in the dropdown
  populateCategories();
  
  // Display a random quote based on filter
  displayRandomQuote();
});