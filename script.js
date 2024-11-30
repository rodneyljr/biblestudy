// Script.js

// Function to toggle between tabs
function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.style.display = 'none'); // Hide all tabs
  document.getElementById(tabId).style.display = 'block'; // Show selected tab
}

// Save Notes Functionality
function saveNotes() {
  const notes = document.getElementById('notes-input').value;
  localStorage.setItem('bibleNotes', notes); // Save to local storage
  loadNotes();
}

// Load Saved Notes
function loadNotes() {
  const savedNotes = localStorage.getItem('bibleNotes');
  document.getElementById('saved-notes').innerText = savedNotes || 'No notes yet.';
}

// Load Bible Content (Mock Example - Replace with Fetch API if needed)
function loadBible() {
  const bibleText = "In the beginning God created the heaven and the earth. (Genesis 1:1)"; // Add more content or fetch dynamically
  document.getElementById('bible-text').innerText = bibleText;
}

// Initialize Website
window.onload = () => {
  loadNotes();
  loadBible();
  showTab('bible'); // Default tab
};

