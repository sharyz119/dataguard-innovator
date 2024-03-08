document.addEventListener('DOMContentLoaded', () => {
    const saveButton = document.getElementById('save');
    const cookiePrefSelect = document.getElementById('cookiePref');

    // Load saved preferences
    chrome.storage.sync.get('cookiePref', (data) => {
        cookiePrefSelect.value = data.cookiePref || 'none';
    });

    // Save preferences
    saveButton.addEventListener('click', () => {
        const pref = cookiePrefSelect.value;
        chrome.storage.sync.set({ cookiePref: pref }, () => {
            console.log('Preferences saved:', pref);
        });
    });
});
