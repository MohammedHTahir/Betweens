 <script src="./assets/js/script.js"></script>

    <scrip>
      // Get a reference to your custom install button (update the ID if needed)
const installButton = document.getElementById('install-button'); 

// This will hold the deferred prompt for later use
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the default mini-infobar from appearing
  e.preventDefault(); 

  // Stash the event so it can be triggered later.
  deferredPrompt = e;

  // Show your custom install button
  installButton.hidden = false; 
});

installButton.addEventListener('click', async () => {
  // Hide your custom install button
  installButton.hidden = true;

  // Show the hidden browser prompt
  deferredPrompt.prompt();

  // Await user action on the prompt
  const choiceResult = await deferredPrompt.userChoice;

  // Log the outcome of the prompt for testing/debugging
  console.log(choiceResult.outcome); 
});
    </scrip>