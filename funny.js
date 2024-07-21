(function() {
    'use strict';
    // Update all img tags
    document.querySelectorAll('img').forEach(img => img.src = 'https://ca.slack-edge.com/EHZNUQHMY-WPYBRA5E3-2222609f3385-512');
    
    // Create audio element
    var audio = document.createElement('audio');
    audio.setAttribute('src', 'https://files.slack.com/files-tmb/THZNUQHMY-F0790A19XK3-db1e8816c1/audio_name_pronunciation_audio.mp4');
    audio.setAttribute('controls', '');
    
    // Append audio to body
    document.body.appendChild(audio);
})();
