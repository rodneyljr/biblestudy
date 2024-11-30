// Function to load Bible verses from the API
function loadBible() {
    const chapterInput = document.getElementById('chapter').value.trim();
    const bibleContent = document.getElementById('bibleContent');

    if (!chapterInput) {
        bibleContent.innerHTML = "<p>Please enter a chapter and verse.</p>";
        return;
    }

    const apiUrl = `https://bible-api.com/${chapterInput}?translation=kjv`;

    // Fetch Bible content
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                bibleContent.innerHTML = "<p>Could not fetch Bible content. Please check your input.</p>";
                return;
            }

            const verses = data.verses.map(verse => 
                `<p><strong>${verse.reference}:</strong> ${verse.text}</p>`
            ).join('');
            bibleContent.innerHTML = verses || "<p>No verses found.</p>";
        })
        .catch(error => {
            bibleContent.innerHTML = "<p>Error fetching data from the Bible API.</p>";
        });
}

// Function to show the selected tab
function showTab(tabName) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tabContent');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });

    // Show the selected tab
    document.getElementById(tabName).style.display = 'block';
}

// By default, show the Bible tab when the page loads
window.onload = function() {
    showTab('bibleTab');
};

