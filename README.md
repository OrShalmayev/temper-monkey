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
## 4
```
// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match      *://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
const selectAll=document.querySelectorAll;
const select = document.querySelector;
(function() {
    'use strict';
    window.onload = function(){
    const codeRelatedAnswers = [
        "It's definitely a problem with the recursion base case.",
        "Have you tried turning it off and on again?",
        "I think you need to refactor this into a separate function.",
        "Sounds like a classic off-by-one error to me.",
        "You should consider using a hashmap for better performance.",
        "That's an interesting question, but have you heard about Big O notation?",
        "It looks like a classic case of mutable default arguments.",
        "Just wrap it in a try...catch block and it'll be fine.",
        "Have you considered using a generator expression?",
        "I'm not sure, but your CSS selector might need more specificity.",
        "This is the perfect use case for a monad, obviously.",
        "The answer lies within the depths of the documentation.",
 "You may want to look into memoization to optimize those repeated calculations.",
  "It sounds like you're encountering a race condition here.",
  "Have you checked for any floating point precision issues?",
  "This could be simplified with a list comprehension.",
  "Might be time to consider multithreading to handle the workload.",
  "You probably need to debounce or throttle that function to prevent it from firing too often.",
  "It seems like you're dealing with a CORS issue if it's a web request problem.",
  "Have you set the proper environment variables for your application?",
  "That's a typical scope issue; make sure your variables are declared in the right context.",
  "You might be hitting the API rate limit, consider implementing a retry strategy.",
  "Using a service worker could help cache those assets and improve load times.",
  "That sounds like a job for a regular expression to parse that string.",
  "Perhaps you should look into lazy loading that module for better efficiency.",
  "You could use a web worker to offload that heavy computation and keep the UI responsive.",
  "Maybe a switch statement would be cleaner than multiple if-else chains here.",
  "Sounds like you might benefit from some unit tests to isolate the issue.",
  "You should probably normalize your database tables to avoid redundancy.",
  "Are you sure you don't have a memory leak in your application?",
  "Consider using async/await for more readable asynchronous code.",
  "It looks like you could use a design pattern here, maybe the Strategy or Observer pattern.",
  "Have you thought about using a virtual DOM library to minimize re-renders?",
  "It could be helpful to profile your code and identify the performance bottlenecks.",
  "Have you tried using a different serializer to handle that data format?",
  "You might want to use a CDN to serve those static assets faster globally.",
  "It's possible that you're experiencing a Heisenbug; it behaves differently when trying to diagnose it."
    ];

    // Function to get a random code-related answer
    function getRandomCodeRelatedAnswer() {
        const randomIndex = Math.floor(Math.random() * codeRelatedAnswers.length);
        return codeRelatedAnswers[randomIndex];
    }
        const id = setInterval(()=>{
            document.querySelectorAll('#messages .message.by-assistant .inner:not(.modified)').forEach(element=>{
element.classList.add("modified");
                element.innerHTML = `
                <div class="metadata"><span><strong>ChatGPT (GPT 4 Turbo)<span class="css-xh24x">:</span></strong></span><button class="mantine-UnstyledButton-root mantine-Button-root mantine-wdnt69" type="button" data-button="true"><div class="mantine-3xbgk5 mantine-Button-inner"><span class="mantine-qo1k2 mantine-Button-label"><i class="fa fa-headphones"></i><span>Play</span></span></div></button><div style="flex-grow: 1;"></div><button class="mantine-UnstyledButton-root mantine-Button-root mantine-wdnt69" type="button" data-button="true" style="margin-left: 1rem;"><div class="mantine-3xbgk5 mantine-Button-inner"><span class="mantine-qo1k2 mantine-Button-label"><i class="fa fa-clipboard"></i><span>Copy</span></span></div></button><button class="mantine-UnstyledButton-root mantine-Button-root mantine-wdnt69" type="button" data-button="true"><div class="mantine-3xbgk5 mantine-Button-inner"><span class="mantine-qo1k2 mantine-Button-label"><i class="fa fa-refresh"></i><span>Regenerate</span></span></div></button></div>
                <div>
                <p style="
                max-width: 50rem;
    margin-left: auto;
    margin-right: auto;">${getRandomCodeRelatedAnswer()}</p>
                </div>
                `
            })
        }, 1000)


    }
    // Your code here...
})();
```
