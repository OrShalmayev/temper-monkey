// (function() {
//     'use strict';

//     // function addBanner(position, imageUrl, text) {
//     //     const banner = document.createElement('div');
//     //     banner.textContent = text;
//     //     banner.style.position = 'fixed';
//     //     banner.style.top = '50%';
//     //     banner.style.transform = 'translateY(-50%)';
//     //     banner.style.width = '100px';
//     //     banner.style.height = '50vh';
//     //     banner.style.backgroundColor = 'white';
//     //     banner.style.color = 'black';
//     //     banner.style.display = 'flex';
//     //     banner.style.alignItems = 'center';
//     //     banner.style.justifyContent = 'center';
//     //     banner.style.zIndex = '1000';
//     //     banner.style.backgroundImage = `url(${imageUrl})`;
//     //     banner.style.backgroundSize = 'contain';
//     //     banner.style.backgroundPosition = 'top';
//     //     banner.style.backgroundRepeat = 'no-repeat';

//     //     if (position === 'left') {
//     //         banner.style.left = '0';
//     //     } else if (position === 'right') {
//     //         banner.style.right = '0';
//     //     }

//     //     document.body.appendChild(banner);
//     // }

//     // function getRandomElement(arr) {
//     //     return arr[Math.floor(Math.random() * arr.length)];
//     // }

//     // const images = [
//     //     'https://dev.to/curious_tinkerer/html-attributes-vs-properties-unraveling-the-webs-dna-4c7a',
//     //     'https://ph-files.imgix.net/2ff8a4e4-4388-4dad-8b15-33180e793640.png?auto=format&w=128&h=128&fit=scale&auto=compress',
//     //     'https://srv.buysellads.com/static/30242/0cb80bb72aaa688ad3b9fa0e955e4313260d52e3',
//     //     'https://ca.slack-edge.com/EHZNUQHMY-U02F9S79XJP-a30b50308622-72',
//     //     'https://ca.slack-edge.com/EHZNUQHMY-WPYBRA5E3-2222609f3385-72',
//     //     'https://www.jim-nielsen.com/.well-known/avatar',
//     //     'https://cdn.jim-nielsen.com/blog/2024/radios-non-flexbox-animated.gif',
//     //     'https://media.tenor.com/kpQ-_wIRCEAAAAAM/rage-mad.gif',
//     //     'https://media.tenor.com/sqPW93LdQ7AAAAAM/september-earth-wind-and-fire.gif',
//     //     'https://media.tenor.com/tBkzk_5sfJ4AAAAM/lion-roar.gif',
//     //     'https://media.tenor.com/jgJLAeJSeyYAAAAM/happy-dance-snoopy.gif'

//     // ];

//     // const texts = [
//     //     'Fable at 20: a uniquely British video game with a complex legacy',
//     //     'Surely That Can\'t Change Sign Back and Forth (Machine Learning Model Homology)',
//     //     'LsCs is a cross platform C++ GUI library focused on Medical Devices',
//     //     'With software, the fact is that sometimes there are just',
//     //     'So my recipe is: sand it, feel the grain, get a splinter, sand again, and repeat until smooth.'
//     // ];

//     // addBanner('left', getRandomElement(images), getRandomElement(texts));
//     // addBanner('right', getRandomElement(images), getRandomElement(texts));
// })();







// ==UserScript==
// @name         Random Toast Notifications and Custom Error Page
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Shows random success or error toast notifications and sometimes a custom error page
// @match        *://*/*
// @exclude    *://localhost*
// @exclude    *://console.dev.spotinst.com*
// @grant        none
// ==/UserScript==

// (function() {
//     'use strict';

//     function showToast(message, type) {
//         // Create toast element
//         const toast = document.createElement('div');
//         toast.textContent = message;
//         toast.style.position = 'fixed';
//         toast.style.bottom = '20px';
//         toast.style.left = '50%';
//         toast.style.transform = 'translateX(-50%)';
//         toast.style.padding = '10px 20px';
//         toast.style.borderRadius = '5px';
//         toast.style.color = 'white';
//         toast.style.zIndex = '9999';
//         toast.style.opacity = '0';
//         toast.style.transition = 'opacity 0.5s ease';

//         // Set styles based on type
//         if (type === 'success') {
//             toast.style.backgroundColor = '#4CAF50';
//             toast.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
//         } else {
//             toast.style.backgroundColor = '#f44336';
//             toast.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
//         }

//         // Add the toast to the body
//         document.body.appendChild(toast);

//         // Show toast with fade-in effect
//         setTimeout(() => {
//             toast.style.opacity = '1';
//         }, 100);

//         // Hide toast after 5 seconds with fade-out effect, then remove
//         setTimeout(() => {
//             toast.style.opacity = '0';
//             setTimeout(() => {
//                 toast.remove();
//             }, 500);
//         }, 5000);
//     }

//     function randomToast() {
//         // Randomly decide message type and text
//         const isSuccess = Math.random() > 0.5;
//         const message = isSuccess ? 'Successfully updated' : 'Error occurred please try again';
//         const type = isSuccess ? 'success' : 'error';

//         // Show the toast message
//         showToast(message, type);

//         // Schedule the next toast with random interval between 5s and 60s
//         const randomInterval = Math.floor(Math.random() * (60000 - 5000 + 1)) + 5000;
//         setTimeout(randomToast, randomInterval);
//     }

//     // Start the random toast display
//     // randomToast();

//     function showErrorPage() {
//         // Define and inject CSS for the error page
//         const style = document.createElement('style');
//         style.textContent = `
//             a { color: var(--link-color); }
//             body {
//                 --background-color: #fff;
//                 --error-code-color: var(--google-gray-700);
//                 --google-blue-50: rgb(232, 240, 254);
//                 --google-blue-100: rgb(210, 227, 252);
//                 --google-blue-300: rgb(138, 180, 248);
//                 --google-blue-600: rgb(26, 115, 232);
//                 --google-blue-700: rgb(25, 103, 210);
//                 --google-gray-100: rgb(241, 243, 244);
//                 --google-gray-300: rgb(218, 220, 224);
//                 --google-gray-500: rgb(154, 160, 166);
//                 --google-gray-50: rgb(248, 249, 250);
//                 --google-gray-600: rgb(128, 134, 139);
//                 --google-gray-700: rgb(95, 99, 104);
//                 --google-gray-800: rgb(60, 64, 67);
//                 --google-gray-900: rgb(32, 33, 36);
//                 --heading-color: var(--google-gray-900);
//                 --link-color: rgb(88, 88, 88);
//                 --popup-container-background-color: rgba(0,0,0,.65);
//                 --primary-button-fill-color-active: var(--google-blue-700);
//                 --primary-button-fill-color: var(--google-blue-600);
//                 --primary-button-text-color: #fff;
//                 --quiet-background-color: rgb(247, 247, 247);
//                 --secondary-button-border-color: var(--google-gray-500);
//                 --secondary-button-fill-color: #fff;
//                 --secondary-button-hover-border-color: var(--google-gray-600);
//                 --secondary-button-hover-fill-color: var(--google-gray-50);
//                 --secondary-button-text-color: var(--google-gray-700);
//                 --small-link-color: var(--google-gray-700);
//                 --text-color: var(--google-gray-700);
//                 background: var(--background-color);
//                 color: var(--text-color);
//                 word-wrap: break-word;
//             }
//             .nav-wrapper .secondary-button {
//                 background: var(--secondary-button-fill-color);
//                 border: 1px solid var(--secondary-button-border-color);
//                 color: var(--secondary-button-text-color);
//                 float: none;
//                 margin: 0;
//                 padding: 8px 16px;
//             }
//             .hidden { display: none; }
//             html { -webkit-text-size-adjust: 100%; font-size: 125%; }
//             .icon { background-repeat: no-repeat; background-size: 100%; }
//             @media (prefers-color-scheme: dark) {
//                 body {
//                     --background-color: var(--google-gray-900);
//                     --error-code-color: var(--google-gray-500);
//                     --heading-color: var(--google-gray-500);
//                     --link-color: var(--google-blue-300);
//                     --primary-button-fill-color-active: rgb(129, 162, 208);
//                     --primary-button-fill-color: var(--google-blue-300);
//                     --primary-button-text-color: var(--google-gray-900);
//                     --quiet-background-color: var(--background-color);
//                     --secondary-button-border-color: var(--google-gray-700);
//                     --secondary-button-fill-color: var(--google-gray-900);
//                     --secondary-button-hover-fill-color: rgb(48, 51, 57);
//                     --secondary-button-text-color: var(--google-blue-300);
//                     --small-link-color: var(--google-blue-300);
//                     --text-color: var(--google-gray-500);
//                 }
//             }
//         `;
//         document.head.appendChild(style);

//         // Set up the custom error page HTML
//         document.body.innerHTML = `
//             <div id="main-frame-error" class="interstitial-wrapper" style="
//   height: 100vh;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     text-align: left;
//   ">
//                 <div id="main-content" style="display: flex;flex-direction: column;align-items: baseline;">
//                     <div class="icon icon-generic" style="      max-width: 72px;
// content:image-set(
//       url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIAQMAAABvIyEEAAAABlBMVEUAAABTU1OoaSf/AAAAAXRSTlMAQObYZgAAAENJREFUeF7tzbEJACEQRNGBLeAasBCza2lLEGx0CxFGG9hBMDDxRy/72O9FMnIFapGylsu1fgoBdkXfUHLrQgdfrlJN1BdYBjQQm3UAAAAASUVORK5CYII=) 1x,
//       url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQAQMAAADdiHD7AAAABlBMVEUAAABTU1OoaSf/AAAAAXRSTlMAQObYZgAAAFJJREFUeF7t0cENgDAMQ9FwYgxG6WjpaIzCCAxQxVggFuDiCvlLOeRdHR9yzjncHVoq3npu+wQUrUuJHylSTmBaespJyJQoObUeyxDQb3bEm5Au81c0pSCD8HYAAAAASUVORK5CYII=) 2x)"></div>
//                     <div id="main-message">
//                         <h1>
//                             <span>This site can’t be reached</span>
//                             <a id="error-information-button" class="hidden"></a>
//                         </h1>
//                         <p>Check if there is a typo in <span>www.example.com</span>.</p>
//                         <div class="error-code">DNS_PROBE_FINISHED_NXDOMAIN</div>
//                     </div>
//                 </div>
//                 <div id="buttons" class="nav-wrapper suggested-right">
//                     <div id="control-buttons">
//                         <button id="reload-button" class="blue-button text-button" onclick="window.location.reload();">Reload</button>
//                     </div>
//                 </div>
//             </div>
//         `;
//         document.title = "This site can’t be reached";
//     }

//     // Randomly decide whether to show the error page (50% chance)
//     if (Math.random() > 0.7) {
//         showErrorPage();
//     }


//        // Replace "shahaf" with "Mother ficker" in all text nodes
//     function replaceTextContent() {
//         const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
//         let node;
//         while (node = walker.nextNode()) {
//             node.nodeValue = node.nodeValue.replace(/this/gi, 'Mother fucker');
//         }
//     }

//     // Apply the text replacement on page load
//     window.addEventListener('load', replaceTextContent);
// })();




// #region Or Maman
// ==UserScript==
// @name         Word Replacer for Angular (Shadow DOM aware)
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Replace words based on a dictionary, supports Angular + Shadow DOM
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Your dictionary (case-insensitive)
const wordMap = {
    // Handling user's original example entries with Antonyms:
    'Disconnect': 'Disconnect',
    'Karpenter': 'Karpenter', // Product name, no direct antonym
    'Cluster5': 'Cluster5',   // Identifier, no direct antonym
    'R1': 'R1',               // Identifier, no direct antonym
    'Null': 'Value',          // Opposite of lacking value or existence
    'ocean': 'Desert',        // Literal opposite of 'ocean' (vast water vs. vast arid land)

    // --- Antonyms for words from the user's provided text block ---

    // For "up to date" / "latest" / "Update"
    'Update': 'Downgrade',        // Or 'Stagnate', 'Freeze' (verb/noun)
    'latest': 'Oldest',           // For "latest version"
    'version': 'OutdatedVersion', // Or 'BaseModel' if version implies specificity
                                  // 'Unversioned' can also work.

    'Overview': 'Details',        // Or 'Specifics'
    'Recommendations': 'Prohibitions', // Or 'Restrictions'
    'Cost': 'Benefit',            // Or 'Revenue'
    'Analysis': 'SurfaceLevelView', // Or 'Assumption', 'Omission' (opposite of in-depth study)
    'Right Sizing': 'ImproperSizing', // Or 'Misconfiguration'
    'NEW': 'OLD',                 // Or 'ARCHIVED', 'DEPRECATED'

    // Technical terms often map to themselves or require careful consideration
    'Namespaces': 'GlobalSpace',  // Or keep 'Namespaces' if no clear operational opposite
    'Pods': 'Pods',               // Specific K8s concept, no simple antonym
    'Services': 'Outages',        // Or 'Disruptions' (opposite of service availability)
    'Nodes': 'Vacancies',         // Or 'AbsenceOfNodes' (opposite of present compute units)
    'Rolls': 'Rollbacks',         // Assuming "Rolls" means Deployments/Rollouts
    'AMI Auto Update': 'AMI Manual Freeze', // Phrase
    'Auto Update': 'ManualHold',  // Or 'StaticConfiguration'
    'Log': 'UnrecordedData',      // Or 'NoLog', 'EphemeralOutput'

    'managed': 'Unmanaged',       // Or 'Autonomous', 'Neglected'
    'Savings': 'Losses',          // Or 'Expenditures'
    'running': 'Stopped',         // Or 'Idle', 'Failed'
    'calculated': 'Guessed',      // Or 'Assumed', 'Estimated' (if calc. implies precision)
    'Total': 'Partial',           // Or 'Individual'
    'est.': 'Actual',             // For "estimated"
    'cluster': 'IndividualNode',  // Or 'StandaloneUnit'
    'costs': 'Revenues',          // Or 'Profits'

    'CPU': 'CPU',                 // Label for a resource, no direct word antonym
    'Memory': 'Memory',           // Label for a resource
    'Hours': 'Hours',             // Unit

    'Updated': 'Outdated',        // Or 'Stale' (for the state of having been updated)
    'Last Updated': 'NeverUpdated',// Phrase
    'Activity': 'Inactivity',     // Or 'Stasis'
    'Autoscaling': 'ManualScaling', // Or 'FixedSize'
    'Autoscaling Activity': 'ManualScalingStasis',

    'Learn': 'Ignore',
    'More': 'Less',
    'Learn More': 'ViewLess',     // Or 'HideDetails', 'BasicSummary'

    'Scaling Up': 'ScalingDown',
    'Scale Up': 'ScaleDown',
    'Events': 'Nonevents',        // Or 'Inaction', 'Normalcy'
    'Continuous': 'Intermittent', // Or 'Sporadic', 'Halted'
    'Optimization': 'Degradation',  // Or 'Pessimization'
    'Scale Down': 'ScaleUp',

    'Revert': 'Persist',          // Or 'Maintain', 'ProceedWith'
    'Spots': 'OnDemandInstances', // Or 'FixedPrice' (opposite of interruptible/Karpenter pricing)
    'Commitments': 'NoCommitments', // Or 'FlexibleTerms'
    'Lower Cost': 'HigherCost',
    'Lower': 'Higher',
    'Dynamic': 'Static',          // Or 'Fixed'
    'Autohealing': 'ManualRepair',  // Or 'FailurePersistence'

    'Breakdown': 'Summary',       // Or 'Aggregation', 'Total'
    'Lifecycle': 'StaticState',   // Or 'Perpetuity' (opposite of a cycle with stages)
    'View': 'Hide',
    'By': 'By',                   // Preposition, difficult to get a direct antonym in this context
    'Explore': 'Ignore',          // Or 'Overlook'
    'graph': 'Table',             // Or 'TextReport', 'RawData'
    'Click': 'IgnoreAction',      // Or 'NoClick' (opposite of performing the action)
    'zoom': 'Unzoom',             // Or 'ResetView', 'FullView'
    'maximum': 'Minimum',
    'time frame': 'PointInTime',  // Or 'Instant'
    'viewing': 'Hiding',

    'Information': 'Misinformation', // Or 'Obscurity'
    'Created': 'Destroyed',
    'Region': 'Global',           // Or 'UndefinedLocation'
    'Version': 'Unversioned',     // Or 'GenericProduct'
    'Control': 'Uncontrolled',    // Or 'Laissez-faire'
    'Plane': 'Plane',             // Difficult to get a good antonym for "Plane" in "Control Plane"
    'Control Plane': 'UnmanagedSystem', // Or keep as 'Control Plane'

    'Enabled': 'Disabled',

    // Identifiers and highly specific technical nouns map to themselves
    'talshafir-eks-il-dev': 'talshafir-eks-il-dev',
    'o-02620eb3': 'o-02620eb3',
    'Kubernetes': 'Kubernetes',
    'Controller': 'Controller',     // Specific role, an "Uncontroller" isn't standard
    'AMI': 'AMI',
    'vCPU': 'vCPU',
    'GiB': 'GiB',
    'Autoscaler': 'ManualScaler', // Component for autoscaling vs manual
    'EKS': 'EKS'
    // Version numbers (e.g., v2.0.70) are specific identifiers, not words with antonyms.
};


    // Convert dictionary to RegExp and replacement format
    const regexMap = Object.entries(wordMap).map(([key, value]) => ({
        regex: new RegExp(`\\b${key}\\b`, 'gi'),  // match whole word, case-insensitive
        replacer: (match) => {
            // Preserve case (e.g. "Connect" -> "Disconnect")
            if (match[0] === match[0].toUpperCase()) {
                return value[0].toUpperCase() + value.slice(1);
            }
            return value;
        }
    }));

    // Replace text in a text node
    function replaceText(node) {
        let text = node.textContent;
        regexMap.forEach(({ regex, replacer }) => {
            text = text.replace(regex, replacer);
        });
        node.textContent = text;
    }

    // Traverse DOM and Shadow DOM
    function traverse(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            replaceText(node);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            if (node.shadowRoot) {
                traverse(node.shadowRoot);
            }
            node.childNodes.forEach(traverse);
        }
    }

    // Observe changes (mutation observer)
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                traverse(node);
            });
        });
    });

    // Start observing the entire document and any shadow roots
    function observeNode(node) {
        if (!node) return;

        traverse(node);
        observer.observe(node, {
            childList: true,
            subtree: true
        });

        // Also observe shadow roots
        if (node.shadowRoot) {
            observeNode(node.shadowRoot);
        }

        node.querySelectorAll('*').forEach(el => {
            if (el.shadowRoot) {
                observeNode(el.shadowRoot);
            }
        });
    }

    // Initial observe
    observeNode(document.body);
})();

// #endregion Or Maman
