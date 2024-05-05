# temper-monkey

## 1
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

## 5

```
(function () {
    'use strict';

    // Mapping of words to their negatives
    const negatives = {
        'visible': 'invisible',
        'possible': 'impossible',
        'adequate': 'inadequate',
        'regular': 'irregular',
        'responsible': 'irresponsible',
        'rational': 'irrational',
        'moral': 'immoral',
        'legal': 'illegal',
        'patient': 'impatient',
        'perfect': 'imperfect',
        'polite': 'impolite',
        'balance': 'imbalance',
        'mature': 'immature',
        'partial': 'impartial',
        'pure': 'impure',
        'modest': 'immodest',
        'mortal': 'immortal',
        'mobile': 'immobile',
        'honest': 'dishonest',
        'loyal': 'disloyal',
        'obedient': 'disobedient',
        'orderly': 'disorderly',
        'similar': 'dissimilar',
        'satisfied': 'dissatisfied',
        'continue': 'discontinue',
        'connect': 'disconnect',
        'content': 'discontent',
        'agree': 'disagree',
        'appear': 'disappear',
        'approve': 'disapprove',
        'belief': 'disbelief',
        'please': 'displease',
        'respect': 'disrespect',
        'trust': 'distrust',
        'happy': 'unhappy',
        'kind': 'unkind',
        'lucky': 'unlucky',
        'able': 'unable',
        'tidy': 'untidy',
        'true': 'untrue',
        'well': 'unwell',
        'fair': 'unfair',
        'fit': 'unfit',
        'fortunate': 'unfortunate',
        'friendly': 'unfriendly',
        'healthy': 'unhealthy',
        'helpful': 'unhelpful',
        'known': 'unknown',
        'like': 'unlike',
        'necessary': 'unnecessary',
        'real': 'unreal',
        'comfortable': 'uncomfortable',
        'common': 'uncommon',
        'conscious': 'unconscious',
        'finished': 'unfinished',
        'forgiving': 'unforgiving',
        'grateful': 'ungrateful',
        'interested': 'uninterested',
        'successful': 'unsuccessful',
        'usual': 'unusual',
        'important': 'unimportant',
        'popular': 'unpopular',
        'pleasant': 'unpleasant',
        'productive': 'unproductive',
        'professional': 'unprofessional',
        'reliable': 'unreliable',
        'safe': 'unsafe',
        'stable': 'unstable',
        'steady': 'unsteady',
        'welcome': 'unwelcome',
        'willing': 'unwilling',
        'wise': 'unwise',
        'worthy': 'unworthy',
        // General development terms
        'enabled': 'disabled',
        'online': 'offline',
        'visible': 'hidden',
        'active': 'inactive',
        'fixed': 'broken',
        'optimized': 'unoptimized',
        'synchronous': 'asynchronous',
        'dynamic': 'static',
        'valid': 'invalid',
        'stable': 'unstable',
        'secure': 'insecure',
        'functional': 'nonfunctional',
        'persistent': 'transient',
        'consistent': 'inconsistent',
        'efficient': 'inefficient',
        'flexible': 'inflexible',
        'responsive': 'unresponsive',
        'redundant': 'essential',
        'abstract': 'concrete',
        'ascending': 'descending',
        'authenticated': 'unauthenticated',
        'authorized': 'unauthorized',
        'centralized': 'decentralized',
        'compressed': 'uncompressed',
        'encrypted': 'unencrypted',
        'stateful': 'stateless',
        'monolithic': 'modular',
        'native': 'cross-platform',
        'public': 'private',
        'sequential': 'parallel',
        'temporary': 'permanent',
        'volatile': 'nonvolatile',

        // Specific programming terms
        'immutable': 'mutable',
        'declarative': 'imperative',
        'compiled': 'interpreted',
        'synchronous': 'asynchronous',
        'strongly-typed': 'weakly-typed',
        'loosely-coupled': 'tightly-coupled',
        'manual': 'automatic',
        'procedural': 'object-oriented',

        // Error handling
        'success': 'failure',
        'error-free': 'error-prone',
        'handled': 'unhandled',
        'expected': 'unexpected',

        // Performance
        'fast': 'slow',
        'lightweight': 'heavyweight',
        'optimized': 'unoptimized',
        'scalable': 'unscalable',

        // Software development methodologies
        'agile': 'rigid',
        'iterative': 'linear',
        'incremental': 'big-bang'
    };

    // Function to replace text with its negative
    function replaceWithNegative(element) {
        const words = element.textContent.match(/\w+/g) || [];
        const newText = words.map(word => {
            const lowerCaseWord = word.toLowerCase();
            return negatives[lowerCaseWord] ? negatives[lowerCaseWord] : word;
        }).join(' ');

        if (newText !== element.textContent) {
            console.log('Original:', element.textContent);
            console.log('Replaced:', newText);
            element.textContent = newText;
        }
    }

    window.onload = function (e) {
        document.querySelectorAll('p,span,a,h1,h2,h3,h4,h5,h6,li,div').forEach(element => {
            replaceWithNegative(element);
        });
    };
})();

```

## 6 

// ==UserScript==
// @name        Random Algorithm Popup (Enhanced Readability)
// @namespace   https://tampermonkey.net/
// @version     0.7
// @description Shows a random algorithm question with clear code formatting when opening a new tab
// @author      you
// @match       *://*/*
// @grant       none
// ==/UserScript==

(function() {
function parseAlgorithm(data) {
  const lines = data.split(". ###");
  const selectedAlgo = lines[Math.floor(Math.random() * lines.length)]; // Choose a random line
  console.log('selectedAlgo',selectedAlgo)

  // Use regex to extract the text within the triple backticks
  const regex = /```([^`]+)```/gs;
  const matches = selectedAlgo.match(regex);

  if (matches) {
  let newText = selectedAlgo;
  matches.forEach(match => {
    const codeBlock = match.replace(/```/g, '').trim(); // Remove the backticks
    newText = newText.replace(match, `<pre><code>${codeBlock}</code></pre>`);
  });
    return newText;
  } else {
    // If no code block found, return the original line
    return selectedAlgo;
  }
}

  // Script logic
  const url = "https://raw.githubusercontent.com/sudheerj/javascript-interview-questions/master/README.md";
  fetch(url)
    .then(response => response.text())
    .then(data => {
      const randomAlgorithm = parseAlgorithm(data);
      showPopup(randomAlgorithm);
    })
    .catch(error => console.error("Error fetching algorithm:", error));

 function showPopup(algorithm) {
  const popup = document.createElement("div");
  popup.style.cssText = `
    position: fixed;
    top: 0;
    right: 0;
    background-color: white;
    padding: 20px;
    font-family: monospace; /* Use monospace font for code readability */
    font-size: 13px;
    border: 1px solid black;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    z-index: 9999;
    max-width: 800px; /* Optional: Set a maximum width for longer questions */
    overflow-wrap: break-word; /* Allow text wrapping for better line breaks */
    color: #000;
        white-space: pre-wrap;

  `;

  // Create a pre element and a code element
  const pre = document.createElement("pre");
  const code = document.createElement("code");

  // Set the text of the code element to the algorithm
  code.textContent = algorithm;

  // Append the code element to the pre element
  pre.appendChild(code);

  // Append the pre element to the popup
  popup.innerHTML = algorithm;

  document.body.appendChild(popup);

  // Optionally, add a close button
  const closeButton = document.createElement("button");
     closeButton.style.cssText=`
     position:absolute;
     right:0;
     top:0;
     `
  closeButton.textContent = "Close";
  closeButton.onclick = () => document.body.removeChild(popup);
  popup.appendChild(closeButton);
}
})();

