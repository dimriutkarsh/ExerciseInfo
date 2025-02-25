function createTestUser() {
    const testUser = {
        name: 'Ankit',
        email: 'ankit@test.com',
        password: 'test123',
        createdAt: new Date().toISOString()
    };

    // Get existing users
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if user already exists
    if (!users.find(user => user.email === testUser.email)) {
        users.push(testUser);
        localStorage.setItem('users', JSON.stringify(users));
        console.log('Test user created successfully:', testUser);
    } else {
        console.log('Test user already exists');
    }
}

function getAllUsers() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    return users.map(user => ({
        name: user.name,
        email: user.email,
        createdAt: new Date(user.createdAt).toLocaleDateString()
    }));
}

function displayUsersList() {
    const users = getAllUsers();
    const userProfile = document.getElementById('userProfile');
    
    if (userProfile) {
        const usersList = users.map(user => `
            <div class="profile-card">
                <div class="profile-info">
                    <p><strong>Name:</strong> ${user.name}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Member Since:</strong> ${user.createdAt}</p>
                </div>
            </div>
        `).join('');

        userProfile.innerHTML = `
            <h3>Users List</h3>
            ${usersList}
        `;
    }
}

// Create test user when this script loads
createTestUser();