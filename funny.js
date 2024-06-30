(function() {
    'use strict';

    // Define the new favicon URL
    var newFaviconURL = 'https://netapp.enterprise.slack.com/team/U0482U0ARKK';

    // Find existing favicon element
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = newFaviconURL;

    // Remove any existing favicons
    var head = document.getElementsByTagName('head')[0];
    var existingIcons = head.querySelectorAll("link[rel*='icon']");
    existingIcons.forEach(function(icon) {
        head.removeChild(icon);
    });

    // Add the new favicon
    head.appendChild(link);
})();
