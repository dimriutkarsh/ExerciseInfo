// Check authentication status on protected pages
function checkAuth() {
    if (!isLoggedIn() && !window.location.pathname.includes('index.html')) {
      window.location.href = 'index.html';
    }
  }
  
  // Run auth check when page loads
  document.addEventListener('DOMContentLoaded', checkAuth);
  
  // Handle logout
  function handleLogout() {
    logout();
    window.location.href = 'index.html';
  }