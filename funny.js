(function() {
    'use strict';

    // Define the new favicon URL
    var newFaviconURL = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fuser_1077114&psig=AOvVaw2f6dG40CR0GC7vwuXoKK7g&ust=1719821099992000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPjf6oDvgocDFQAAAAAdAAAAABAE';

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
