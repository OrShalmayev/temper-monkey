(function() {
    'use strict';

    function replaceText(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            node.textContent = node.textContent.replace(/\bthis\b/gi, 'she');
        } else {
            node.childNodes.forEach(replaceText);
        }
    }


    document.querySelectorAll('*').forEach((n)=>{
        replaceText(n)
    })
})();