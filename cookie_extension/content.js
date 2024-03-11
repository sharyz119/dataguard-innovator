chrome.storage.sync.get('cookiePref', function(data) {
    // Check if the saved preference is not 'decline_all'
    if (data.cookiePref !== 'decline_all' && data.cookiePref !== 'decline_tracking') {
        // Show the warning banner
        const banner = document.createElement('div');
        banner.innerText = "Warning: this website might be tracking you. Change your CookieGuard settings.";
        banner.style.background = 'orange';
        banner.style.color = 'white';
        banner.style.position = 'fixed';
        banner.style.top = '0';
        banner.style.left = '0';
        banner.style.right = '0';
        banner.style.textAlign = 'center';
        banner.style.padding = '10px 0'; // Added padding for better appearance
        banner.style.zIndex = '9999'; // Ensure it's above most elements
        document.body.prepend(banner);

        // Create a span element to act as the click-away cross
        const closeBtn = document.createElement('span');
        closeBtn.innerText = '×'; // Using '×' as the cross symbol
        closeBtn.style.position = 'absolute';
        closeBtn.style.right = '20px';
        closeBtn.style.top = '0';
        closeBtn.style.bottom = '0';
        closeBtn.style.margin = 'auto 0'; // Center vertically
        closeBtn.style.height = '20px'; // Fixed height for the close button
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.fontSize = '20px'; // Larger font size for the cross symbol
        closeBtn.style.padding = '0 10px'; // Padding for better clickability

        // Add the close button to the banner
        banner.appendChild(closeBtn);

        // Add click event listener to the close button to remove the banner when clicked
        closeBtn.addEventListener('click', function() {
            banner.remove(); // This removes the banner from the document
        });
    }
});


// HIDE COOKIE POP-UP
(function hideCookiePopups() {
    // Common selectors for cookie pop-ups
    const selectors = [
        'div[id*="cookie"]', // Matches any div element with an id containing "cookie"
        'div[class*="cookie"]', // Matches any div element with a class containing "cookie"
        'div[id*="popup"]', // Matches any div element with an id containing "popup"
        'div[class*="popup"]', // Matches any div element with a class containing "popup"
        // Add more selectors as needed based on common patterns
    ];

    // Query the document for elements matching the selectors
    selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            // Hide the element. You could also use element.remove() to remove it entirely.
            element.style.display = 'none';
        });
    });
})();
