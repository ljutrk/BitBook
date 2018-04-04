import { checkIfObjectsAreEqual } from '../shared/utils';

const login = (data) => {
    const user = this.users.find(user => {
        if (checkIfObjectsAreEqual(data, user)) return user;
    });

    if (user) localStorage.setItem("user", JSON.stringify(user));
}

const logout = () => {
    localStorage.removeItem("user");
}

const isAuthenticated = () => {
    return JSON.parse(localStorage.getItem("user"));
}

export { login, logout, isAuthenticated }