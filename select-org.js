
(function() {
    'use strict';
    let debounceTimer;
    const ORG_KEY='Spotinst.OrganizationCookie';
    const ACC_KEY='Spotinst.SpotinstAccountCookie';
    const getCachedLocalStorageKey=(name)=>`cached${name}`;

    async function deepSearchElement(selector, onElement = document) {
        const shadowRootElm = Array.from(onElement.querySelectorAll('*')).find(element => element.shadowRoot?.querySelector(selector));
        return shadowRootElm.shadowRoot.querySelector(selector);
    }

    async function clickElement(element) {
        element.click();
    }

async function selectOrganization(orgName='talzur') {
    console.log('Selecting organization...');
    let cachedOrg=localStorage.getItem(getCachedLocalStorageKey(orgName));
    let cachedAccessToken = localStorage.getItem(getCachedLocalStorageKey(orgName+'accessToken'));
    if(cachedOrg){
        console.log('Organization found in cache.');
        localStorage.setItem(ORG_KEY,cachedOrg);
        localStorage.setItem('Spotinst.AccessTokenCookie',cachedAccessToken);
        return true;
    }

    console.log('Organization not found in cache. Fetching...');
    const headerMfe = await deepSearchElement('spt-header');
    const menu = headerMfe.querySelector('spt-header-menu-opener');
    await clickElement(menu);
    let menuItems = headerMfe.parentNode.querySelector('.organization-menu-content');
    let inputElement = menuItems.querySelector('input[data-aid="spt.header.menus.search-bar.search"]');
    inputElement.value = orgName;
    inputElement.dispatchEvent(new Event('input'));
    let matchingElement = menuItems.querySelector('.organization-menu-item');
    await clickElement(matchingElement);
    let appCachedOrg=localStorage.getItem(ORG_KEY);
    let accessToken = localStorage.getItem('Spotinst.AccessTokenCookie');
    localStorage.setItem(getCachedLocalStorageKey(orgName), appCachedOrg);
    localStorage.setItem(getCachedLocalStorageKey(orgName+'accessToken'), accessToken);
    console.log('Organization fetched and cached.');
    return false;
}

async function selectAccount(accountToSearch='Containers Azure V2 Account') {
    console.log('Selecting account...');
    let cachedOrg=localStorage.getItem(getCachedLocalStorageKey(accountToSearch));
    if(cachedOrg){
        console.log('Account found in cache.');
        localStorage.setItem(ACC_KEY,cachedOrg);
        return true;
    }

    console.log('Account not found in cache. Fetching...');
    const headerMfe = await deepSearchElement('spt-header');
    const menu = headerMfe.querySelector('spt-header-account-menu spt-header-menu-opener');
    await clickElement(menu);
    let menuItems = headerMfe.parentNode.querySelector('.account-menu-content');
    let inputElement = menuItems.querySelector('input[data-aid="spt.header.menus.search-bar.search"]');
    inputElement.value = accountToSearch;
    inputElement.dispatchEvent(new Event('input'));
    let matchingElement = menuItems.querySelector('.account-menu-item');
    await clickElement(matchingElement);
    let appCachedOrg=localStorage.getItem(ACC_KEY);
    localStorage.setItem(getCachedLocalStorageKey(accountToSearch), appCachedOrg);
    console.log('Account fetched and cached.');
    return false;
}

    async function navigateToClusters() {
        window.location.href = `${window.location.origin}/ocean/azure/clusters`;
    }

    let keys = '';
    window.addEventListener('keydown', async function(event) {
        keys += event.key.toLowerCase();
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
