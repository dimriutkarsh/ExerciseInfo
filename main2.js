document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login');
    const signupForm = document.querySelector('.signup');
    const headerTitle = document.querySelector('.header-title');
    const headerSubtitle = document.querySelector('.header-subtitle');
    const switchBtns = document.querySelectorAll('.switch-btn');

    const headerContent = {
        login: {
            title: "Transform your body, mind, and soul through the power of yoga and fitness.",
            subtitle: "Join our community of wellness enthusiasts and discover the perfect balance of physical and mental well-being."
        },
        signup: {
            title: "Begin your wellness journey with YogaFit today.",
            subtitle: "Create your account to access personalized yoga sessions, fitness tracking, and a supportive community."
        }
    };

    function toggleForms(showLogin) {
        if (showLogin) {
            loginForm.classList.remove('hidden');
            signupForm.classList.add('hidden');
            headerTitle.textContent = headerContent.login.title;
            headerSubtitle.textContent = headerContent.login.subtitle;
        } else {
            loginForm.classList.add('hidden');
            signupForm.classList.remove('hidden');
            headerTitle.textContent = headerContent.signup.title;
            headerSubtitle.textContent = headerContent.signup.subtitle;
        }
    }

    switchBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleForms(btn.dataset.form === 'login');
        });
    });

    // Form submission handlers
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        // Add login logic here
        console.log('Login submitted');
    });

    document.getElementById('signupForm').addEventListener('submit', (e) => {
        e.preventDefault();
        // Add signup logic here
        console.log('Signup submitted');
    });
});