function setWithExpiry(key, value, ttl) {
    const now = new Date();
    const item = {
        value: value,
        expiry: now.getTime() + ttl,
    };
    localStorage.setItem(key, JSON.stringify(item));
}

function getWithExpiry(key) {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) {
        return null;
    }
    const item = JSON.parse(itemStr);
    const now = new Date();
    if (now.getTime() > item.expiry) {
        localStorage.removeItem(key);
        return null;
    }
    return item.value;
}

(function() {
    'use strict';
    let debounceTimer;
    const ORG_KEY = 'Spotinst.OrganizationCookie';
    const ACC_KEY = 'Spotinst.SpotinstAccountCookie';
    const getCachedLocalStorageKey = (name) => `cached${name}`;

    async function deepSearchElement(selector, onElement = document) {
        const shadowRootElm = Array.from(onElement.querySelectorAll('*')).find(element => element.shadowRoot?.querySelector(selector));
        if (shadowRootElm) {
            return shadowRootElm.shadowRoot.querySelector(selector);
        }
        return null;
    }

    async function clickElement(element) {
        if (element) {
            element.click();
        }
    }

    async function selectOrganization(orgName = 'talzur', ttl = 3600000) { // TTL default to 1 hour
        console.log('Selecting organization...');
        let cachedOrg = getWithExpiry(getCachedLocalStorageKey(orgName));
        let cachedAccessToken = getWithExpiry(getCachedLocalStorageKey(orgName + 'accessToken'));
        if (cachedOrg && cachedAccessToken) {
            console.log('Organization found in cache.');
            localStorage.setItem(ORG_KEY, cachedOrg);
            localStorage.setItem('Spotinst.AccessTokenCookie', cachedAccessToken);
            return true;
        }

        // ... (rest of the selectOrganization function)

        // Fetch the organization and access token, then cache them with expiry
        // Use the TTL argument when setting the expiry
        setWithExpiry(getCachedLocalStorageKey(orgName), appCachedOrg, ttl);
        setWithExpiry(getCachedLocalStorageKey(orgName + 'accessToken'), accessToken, ttl);

        console.log('Organization fetched and cached.');
        return false;
    }

    async function selectAccount(accountToSearch = 'Containers Azure V2 Account', ttl = 3600000) { // TTL default to 1 hour
        console.log('Selecting account...');
        let cachedAcc = getWithExpiry(getCachedLocalStorageKey(accountToSearch));
        if (cachedAcc) {
            console.log('Account found in cache.');
            localStorage.setItem(ACC_KEY, cachedAcc);
            return true;
        }

        // ... (rest of the selectAccount function)

        // Fetch the account and cache it with expiry
        // Use the TTL argument when setting the expiry
        setWithExpiry(getCachedLocalStorageKey(accountToSearch), appCachedOrg, ttl);

        console.log('Account fetched and cached.');
        return false;
    }

    async function navigateToClusters() {
        window.location.href = `${window.location.origin}/ocean/azure/clusters`;
    }

    let keys = '';
    window.addEventListener('keydown', async function(event) {
        keys += event.key.toLowerCase();
        if (debounceTimer) clearTimeout(debounceTimer);
        debounceTimer = setTimeout(async () => {
            if (keys.endsWith('aks')) {
                const isOrgCached = await selectOrganization();
                if (!isOrgCached) await new Promise(resolve => setTimeout(resolve, 9000));
                const isAccCached = await selectAccount('Containers Azure V2 Account');
                if (!isAccCached) await new Promise(resolve => setTimeout(resolve, 5000));
                await navigateToClusters();
                keys = '';
            } else if (keys.endsWith('eks')) {
                const isOrgCached = await selectOrganization();
                if (!isOrgCached) await new Promise(resolve => setTimeout(resolve, 3000));
                await selectAccount('Containers AWS Account');
                keys = '';
            }
        }, 300); // 300ms debounce time
    }, false);
})();
