
const login = (loginData) => {
    return fetch("http://bitbookapi.azurewebsites.net/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Key": "64C2396"
        },
        body: JSON.stringify(loginData)
    })
        .then(user => user.json())
        .then(user => localStorage.setItem("SessionId", user.sessionId))
}

const register = (registerData) => {
    return fetch("http://bitbookapi.azurewebsites.net/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Key": "64C2396"
        },
        body: JSON.stringify(registerData)
    })
}

const logout = () => {
    localStorage.removeItem("SessionId");
}

const isAuthenticated = () => {
    return localStorage.getItem("SessionId");
}

export { login, logout, register, isAuthenticated }