# temper-monkey

- [1](#1)
- [2](#2)
- [3](#3)
- [4](#4)
- [5](#5)
- [6](#6)
- [7 Random javascript algorithm](#7-random-javascript-algorithm)
- [8](#8)
###
```ts
// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-05-28
// @description  try to take over the world!
// @author       You
// @match      *://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setInterval(()=>{
    document.querySelectorAll('img').forEach(img=>img.src='https://ca.slack-edge.com/EHZNUQHMY-U02F9RY3C91-bd4bcf757b6f-512')

    },1000);
    // Your code here...
})();
```

```
## 1
```
(function () {
    'use strict';
    const okooraLink = 'https://stage.test.com/';
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


### 7 Random javascript algorithm:
```js
// ==UserScript==
// @name        Random Algorithm Popup (Enhanced Readability)
// @namespace   https://tampermonkey.net/
// @version     0.7
// @description Shows a random algorithm question with clear code formatting when opening a new tab
// @author      you
// @match       https://*/*
// @grant       GM_xmlhttpRequest
// ==/UserScript==

(function() {


  // Script logic
  const url = "https://raw.githubusercontent.com/sudheerj/javascript-interview-questions/master/README.md";
  fetch(url)
    .then(response => response.text())
    .then(data => {
      const randomAlgorithm = parseAlgorithm(data);
      showPopup(randomAlgorithm);
    })
    .catch(error => console.error("Error fetching algorithm:", error));
    function getRandomItem(items) {
        return items[Math.floor(Math.random() * items.length)];
    }

    function fetchGithubContent(url) {
        return new Promise((resolve, reject) => {
            GM_xmlhttpRequest({
                method: "GET",
                url: url,
                headers: {
                    "User-Agent": "Mozilla/5.0", // Required by GitHub API
                    "Accept": "application/vnd.github.v3+json" // Required to get JSON response
                },
                onload: function(response) {
                    resolve(JSON.parse(response.responseText));
                },
                onerror: function(error) {
                    reject(error);
                }
            });
        });
    }

    // Script logic
    const repoUrl = "https://api.github.com/repos/TheAlgorithms/JavaScript/contents";
    fetchGithubContent(repoUrl)
        .then(contents => {
            const directories = contents.filter(item => item.type === "dir");
            const randomDir = getRandomItem(directories);
            return fetchGithubContent(randomDir.url);
        })
        .then(files => {
            const randomFile = getRandomItem(files);
            return fetchGithubContent(randomFile.url);
        })
        .then(fileContent => {
            //const decodedContent = atob(fileContent.content); // Decode the base64 content
        const blob = new Blob([fileContent.content], {type: 'application/octet-stream'});
const reader = new FileReader();
reader.onload = function() {
    const decodedContent = reader.result;
    const text = new TextDecoder("utf-8").decode(Uint8Array.from(atob(decodedContent), c => c.charCodeAt(0)));
    showPopup(text);
};
const asText= reader.readAsText(blob);
            showPopup(decodedContent);
        })
        .catch(error => console.error("Error fetching algorithm:", error));

    // region utils

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
    // endregion utils
})();

```

### 8

```
// ==UserScript==
// @name         Add Reviewer to GitHub Pull Request
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Adds Or Shalmayev as a reviewer to GitHub pull requests with a custom image.
// @author       Your Name
// @match       https://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Wait for the page to fully load
    window.addEventListener('load', function() {
        // Get the "Reviewers" section
        const reviewersSection = document.querySelector('.js-issue-sidebar-form .css-truncate');

        // Create the reviewer element
        const reviewerElement = document.createElement('p');
        reviewerElement.classList.add('d-flex');
        reviewerElement.innerHTML = `
            <span class="d-flex min-width-0 flex-1 js-hovercard-left" data-hovercard-type="user">
                <a class="no-underline" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self">
                    <img class="avatar mr-1 avatar-user" src="https://avatars.githubusercontent.com/u/46129649?s=60&v=4" width="20" height="20" alt="@yizhaqb">
                </a>
                <a class="assignee Link--primary css-truncate-target width-fit" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self">
                    <span class="css-truncate-target width-fit v-align-middle">Or Shalmayev</span>
                </a>
            </span>
            <a class="flex-order-1" aria-labelledby="tooltip-0cada916-ae21-4c0a-b0c4-752c4616ed8a">
                <span class="reviewers-status-icon text-center">
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-comment color-fg-muted">
                        <path d="M1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 13.25 12H9.06l-2.573 2.573A1.458 1.458 0 0 1 4 13.543V12H2.75A1.75 1.75 0 0 1 1 10.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h4.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
                    </svg>
                </span>
            </a>
            <button name="re_request_reviewer_id" value="87391864" class="mr-2 btn-link muted-icon" aria-labelledby="tooltip-4e49d190-1405-47ec-8e0f-4603ae326d7f">
                <span class="reviewers-status-icon">
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-sync">
                        <path d="M1.705 8.005a.75.75 0 0 1 .834.656 5.5 5.5 0 0 0 9.592 2.97l-1.204-1.204a.25.25 0 0 1 .177-.427h3.646a.25.25 0 0 1 .25.25v3.646a.25.25 0 0 1-.427.177l-1.38-1.38A7.002 7.002 0 0 1 1.05 8.84a.75.75 0 0 1 .656-.834ZM8 2.5a5.487 5.487 0 0 0-4.131 1.869l1.204 1.204A.25.25 0 0 1 4.896 6H1.25A.25.25 0 0 1 1 5.75V2.104a.25.25 0 0 1 .427-.177l1.38 1.38A7.002 7.002 0 0 1 14.95 7.16a.75.75 0 0 1-1.49.178A5.5 5.5 0 0 0 8 2.5Z"></path>
                    </svg>
                </span>
            </button>
        `;


        // Add the reviewer element to the "Reviewers" section
        reviewersSection?.prepend(reviewerElement);




            // Your custom name and image URL
    const customName = "Or Shalmayev";
    const customImageUrl = "https://avatars.githubusercontent.com/u/46129649?s=60&v=4";

    // Wait for the DOM to be fully loaded
        setInterval(()=>{

            // Find the reporter's image element by its class name and change the `src` attribute
            const imageElements = document.querySelectorAll('[data-testid*="profilecard-next.ui.profilecard.profilecard-trigger"] img');
            if (imageElements) {
                Array.from(imageElements)?.forEach((img, i)=>{
                    if(i===Array.from(imageElements).length-1){
                                                            img.src = customImageUrl;
                img.style.borderRadius = '50%'; // Make sure the image stays circular
                    }

                })

            }

            // Find the reporter's name element by its data-testid and change the text content
            const nameElement = document.querySelector('[data-testid="issue.views.field.user.reporter.name.wrapper"]');
            if (nameElement) {
                nameElement.textContent = customName;
            }
        }, 1000)

// Function to swap the CSS variables
function swapDiffColors() {
  // Select the element that has the CSS variables
  const styleElement = document.querySelector('[data-color-mode="light"][data-light-theme="light"]');

  // If the style element is not found, exit the function
  if (!styleElement) {
    console.warn('Style element for diff colors not found');
    return;
  }

  // Get the current CSS variables values
  const additionFgColorText = getComputedStyle(styleElement).getPropertyValue('--diffBlob-addition-fgColor-text');
  const additionFgColorNum = getComputedStyle(styleElement).getPropertyValue('--diffBlob-addition-fgColor-num');
  const additionBgColorNum = getComputedStyle(styleElement).getPropertyValue('--diffBlob-addition-bgColor-num');
  const additionBgColorLine = getComputedStyle(styleElement).getPropertyValue('--diffBlob-addition-bgColor-line');
  const additionBgColorWord = getComputedStyle(styleElement).getPropertyValue('--diffBlob-addition-bgColor-word');

  const deletionFgColorText = getComputedStyle(styleElement).getPropertyValue('--diffBlob-deletion-fgColor-text');
  const deletionFgColorNum = getComputedStyle(styleElement).getPropertyValue('--diffBlob-deletion-fgColor-num');
  const deletionBgColorNum = getComputedStyle(styleElement).getPropertyValue('--diffBlob-deletion-bgColor-num');
  const deletionBgColorLine = getComputedStyle(styleElement).getPropertyValue('--diffBlob-deletion-bgColor-line');
  const deletionBgColorWord = getComputedStyle(styleElement).getPropertyValue('--diffBlob-deletion-bgColor-word');

  // Swap the CSS variables
  styleElement.style.setProperty('--diffBlob-addition-fgColor-text', deletionFgColorText);
  styleElement.style.setProperty('--diffBlob-addition-fgColor-num', deletionFgColorNum);
  styleElement.style.setProperty('--diffBlob-addition-bgColor-num', deletionBgColorNum);
  styleElement.style.setProperty('--diffBlob-addition-bgColor-line', deletionBgColorLine);
  styleElement.style.setProperty('--diffBlob-addition-bgColor-word', deletionBgColorWord);

  styleElement.style.setProperty('--diffBlob-deletion-fgColor-text', additionFgColorText);
  styleElement.style.setProperty('--diffBlob-deletion-fgColor-num', additionFgColorNum);
  styleElement.style.setProperty('--diffBlob-deletion-bgColor-num', additionBgColorNum);
  styleElement.style.setProperty('--diffBlob-deletion-bgColor-line', additionBgColorLine);
  styleElement.style.setProperty('--diffBlob-deletion-bgColor-word', additionBgColorWord);
}

// Run the function to swap the colors
swapDiffColors();


    });
})();



```



