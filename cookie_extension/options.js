document.addEventListener('DOMContentLoaded', () => {
    const saveButton = document.getElementById('save');
    const cookiePrefSelect = document.getElementById('cookiePref');
    const saveStatusDiv = document.getElementById('saveStatus'); // Get the status div

    // Load saved preferences using chrome.storage
    chrome.storage.sync.get('cookiePref', (data) => {
        if (data.cookiePref) {
            cookiePrefSelect.value = data.cookiePref;
        } else {
            // Handle case where no preference has been saved
            cookiePrefSelect.value = 'accept_all';
        }
    });

    saveButton.addEventListener('click', () => {
        const pref = cookiePrefSelect.value;
        chrome.storage.sync.set({cookiePref: pref}, () => {
            console.log('Preferences saved:', pref);
            const saveStatusDiv = document.getElementById('saveStatus');
            saveStatusDiv.textContent = 'Preferences saved successfully!';
            saveStatusDiv.className = 'save-status-message'; // Ensure this matches your CSS class
            setTimeout(() => {
                saveStatusDiv.textContent = '';
                saveStatusDiv.className = ''; // Optionally remove the class when clearing the message
            }, 3000);
        });
    });
});
