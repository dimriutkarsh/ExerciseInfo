// Form validation utilities
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function validatePassword(password) {
    return password.length >= 6;
  }
  
  // Form handlers
  document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    try {
      if (!validateEmail(email)) {
        throw new Error('Invalid email format');
      }
      
      await login(email, password);
      window.location.href = 'main.html'; // Redirect to main page
    } catch (error) {
      alert(error.message);
    }
  });
  
  document.getElementById('signupForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    try {
      if (!validateEmail(email)) {
        throw new Error('Invalid email format');
      }
      
      if (!validatePassword(password)) {
        throw new Error('Password must be at least 6 characters long');
      }
      
      if (password !== confirmPassword) {
        throw new Error('Passwords do not match');
      }
      
      await signup(name, email, password);
      window.location.href = 'main.html'; // Redirect to main page
    } catch (error) {
      alert(error.message);
    }
  });
  
  // Form switching functionality
  document.querySelectorAll('.switch-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const formType = button.dataset.form;
      
      document.querySelector('.form-box.login').classList.toggle('hidden');
      document.querySelector('.form-box.signup').classList.toggle('hidden');
    });
  });