// Show warning for non-trusted sites
const banner = document.createElement('div');
banner.innerText = "Warning: The credibility of this website cannot be verified.";
banner.style.background = 'red';
banner.style.color = 'white';
banner.style.position = 'fixed';
banner.style.top = '0';
banner.style.width = '100%';
banner.style.textAlign = 'center';
document.body.prepend(banner);

// Function to accept cookies (very simplified)
function acceptCookies() {
    const buttons = document.querySelectorAll('button, input[type="button"], input[type="submit"], a');
    buttons.forEach(button => {
        if (button.innerText.toLowerCase().includes('accept')) {
            button.click();
        }
    });
}

// Check user preferences and act
chrome.storage.sync.get('cookiePref', (data) => {
    if (data.cookiePref === 'accept') {
        acceptCookies();
    }
});
