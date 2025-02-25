// User profile management
function getCurrentUser() {
    const userData = localStorage.getItem('currentUser');
    return userData ? JSON.parse(userData) : null;
  }
  
  function displayUserProfile() {
    const user = getCurrentUser();
    if (!user) {
      return;
    }
  
    const profileContainer = document.getElementById('userProfile');
    if (profileContainer) {
      profileContainer.innerHTML = `
        <div class="profile-card">
          <h3>User Profile</h3>
          <div class="profile-info">
            <p><strong>Name:</strong> ${user.name}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Member Since:</strong> ${new Date(user.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
      `;
    }
  }
  
  // Initialize profile display when the page loads
  document.addEventListener('DOMContentLoaded', displayUserProfile);