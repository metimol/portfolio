// This script sets the CSS variable --base-path depending on the environment
(function() {
    // Check if we are in the production environment (GitHub Pages)
    const isProduction = window.location.hostname === "metimol.github.io";
    
    // Set the value of the CSS variable
    document.documentElement.style.setProperty('--base-path', isProduction ? '/portfolio' : '');
})();