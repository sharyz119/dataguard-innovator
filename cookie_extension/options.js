document.addEventListener('DOMContentLoaded', () => {
    const saveButton = document.getElementById('save');
    const cookiePrefSelect = document.getElementById('cookiePref');

    // Load saved preferences using chrome.storage
    chrome.storage.sync.get('cookiePref', (data) => {
        if (data.cookiePref) {
            cookiePrefSelect.value = data.cookiePref;
        } else {
            // Handle case where no preference has been saved
            cookiePrefSelect.value = 'accept_all'; //
        }
    });

    // Save preferences using chrome.storage
    saveButton.addEventListener('click', () => {
        const pref = cookiePrefSelect.value;
        chrome.storage.sync.set({cookiePref: pref}, () => {
            console.log('Preferences saved:', pref);
            alert('Preferences saved successfully!');
        });
    });
});
