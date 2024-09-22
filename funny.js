(function() {
    'use strict';

    function addBanner(position, imageUrl, text) {
        const banner = document.createElement('div');
        banner.textContent = text;
        banner.style.position = 'fixed';
        banner.style.top = '50%';
        banner.style.transform = 'translateY(-50%)';
        banner.style.width = '100px';
        banner.style.height = '50vh';
        banner.style.backgroundColor = 'white';
        banner.style.color = 'black';
        banner.style.display = 'flex';
        banner.style.alignItems = 'center';
        banner.style.justifyContent = 'center';
        banner.style.zIndex = '1000';
        banner.style.backgroundImage = `url(${imageUrl})`;
        banner.style.backgroundSize = 'contain';
        banner.style.backgroundPosition = 'top';
        banner.style.backgroundRepeat = 'no-repeat';

        if (position === 'left') {
            banner.style.left = '0';
        } else if (position === 'right') {
            banner.style.right = '0';
        }

        document.body.appendChild(banner);
    }

    function getRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    const images = [
        'https://dev.to/curious_tinkerer/html-attributes-vs-properties-unraveling-the-webs-dna-4c7a',
        'https://ph-files.imgix.net/2ff8a4e4-4388-4dad-8b15-33180e793640.png?auto=format&w=128&h=128&fit=scale&auto=compress',
        'https://srv.buysellads.com/static/30242/0cb80bb72aaa688ad3b9fa0e955e4313260d52e3',
        'https://ca.slack-edge.com/EHZNUQHMY-U02F9S79XJP-a30b50308622-72',
        'https://ca.slack-edge.com/EHZNUQHMY-WPYBRA5E3-2222609f3385-72',
        'https://www.jim-nielsen.com/.well-known/avatar',
        'https://cdn.jim-nielsen.com/blog/2024/radios-non-flexbox-animated.gif',
        'https://media.tenor.com/kpQ-_wIRCEAAAAAM/rage-mad.gif',
        'https://media.tenor.com/sqPW93LdQ7AAAAAM/september-earth-wind-and-fire.gif',
        'https://media.tenor.com/tBkzk_5sfJ4AAAAM/lion-roar.gif',
        'https://media.tenor.com/jgJLAeJSeyYAAAAM/happy-dance-snoopy.gif'

    ];

    const texts = [
        'Fable at 20: a uniquely British video game with a complex legacy',
        'Surely That Can\'t Change Sign Back and Forth (Machine Learning Model Homology)',
        'LsCs is a cross platform C++ GUI library focused on Medical Devices',
        'With software, the fact is that sometimes there are just',
        'So my recipe is: sand it, feel the grain, get a splinter, sand again, and repeat until smooth.'
    ];

    addBanner('left', getRandomElement(images), getRandomElement(texts));
    addBanner('right', getRandomElement(images), getRandomElement(texts));
})();