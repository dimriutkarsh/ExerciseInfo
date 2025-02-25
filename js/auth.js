// User database simulation using localStorage
const userDB = {
    getUsers() {
      return JSON.parse(localStorage.getItem('users') || '[]');
    },
    
    saveUsers(users) {
      localStorage.setItem('users', JSON.stringify(users));
    },
    
    findUser(email) {
      return this.getUsers().find(user => user.email === email);
    },
    
    createUser(userData) {
      const users = this.getUsers();
      users.push(userData);
      this.saveUsers(users);
    }
  };
  
  // Authentication functions
  function login(email, password) {
    const user = userDB.findUser(email);
    if (!user) {
      throw new Error('User not found');
    }
    if (user.password !== password) {
      throw new Error('Invalid password');
    }
    localStorage.setItem('currentUser', JSON.stringify(user));
    return user;
  }
  
  function signup(name, email, password) {
    if (userDB.findUser(email)) {
      throw new Error('Email already registered');
    }
    
    const userData = {
      name,
      email,
      password,
      createdAt: new Date().toISOString()
    };
    
    userDB.createUser(userData);
    localStorage.setItem('currentUser', JSON.stringify(userData));
    return userData;
  }
  
  function logout() {
    localStorage.removeItem('currentUser');
  }
  
  function isLoggedIn() {
    return !!localStorage.getItem('currentUser');
  }