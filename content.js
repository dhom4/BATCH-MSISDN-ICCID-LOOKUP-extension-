// content.js

// Only define the function once
if (typeof window._msisdnIccidLookupInit === 'undefined') {
  window._msisdnIccidLookupInit = true;

  // ========== YOUR FULL SCRIPT GOES HERE ==========
  // (Exactly as provided, no changes needed)
  
  function showMsisdnInputDialog() { /* ... */ }
  async function batchMsisdnToIccidLookup(msisdnList) { /* ... */ }

  // Do NOT auto-run on page load!
  // Instead, expose a global function to be called by the extension
  window.startMsisdnIccidLookup = () => {
    showMsisdnInputDialog();
  };
}
