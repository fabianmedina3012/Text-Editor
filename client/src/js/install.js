const butInstall = document.getElementById('buttonInstall');
let defferedPrompt
// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    debugger
    defferedPrompt = event;
    butInstall.style.visibility = 'visible';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    debugger

    const promptEvent = defferedPrompt;
    if (!promptEvent) {
        return;
    }
    await promptEvent.prompt();
    defferedPrompt = null;
    butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('PWA was installed successfully!');
    defferedPrompt = null;
});