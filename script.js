document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Replace this with code to read user credentials from your text file
    const users = {
        user1: 'password1',
        user2: 'password2',
    };

    if (authenticateUser(users, username, password)) {
        // Redirect to index.html upon successful authentication
        window.location.href = 'index.html';
    } else {
        alert('Authentication failed. Please check your username and password.');
    }
});

function authenticateUser(users, username, password) {
    // Check if the provided username and password match any user in the users object
    if (users[username] && users[username] === password) {
        return true; // Authentication successful
    }
    return false; // Authentication failed
}
