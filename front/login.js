async function signup() {
    let correo = document.getElementById('correo').value;
    let password = document.getElementById('password').value;

    let response = await fetch('http://localhost:3000/user/signup', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            correo,
            password
        })
    });
    let responseJson = await response.json();

    localStorage.setItem('token', responseJson.token);
}

async function login() {
    let correo = document.getElementById('correo').value;
    let password = document.getElementById('password').value;

    let response = await fetch('http://localhost:3000/user/signin', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            correo,
            password
        })
    });
    let responseJson = await response.json();

    localStorage.setItem('token', responseJson.token);

    window.location.href = '/';
}

async function logout() {
    localStorage.removeItem('token');

    window.location.href = '/login'
}

async function verifySession() {
    let token = localStorage.getItem('token');

    if(!token) {
        window.location.href = '/login';
    }

    document.getElementById('token').innerText = token;
}