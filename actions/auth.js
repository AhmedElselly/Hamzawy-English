import axios from 'axios';
import cookie from 'js-cookie';
const url = 'http://localhost:3000/api';

export const login = async (email, password) => {
    const res = await axios.post(`${url}/login`, {email, password});
    return res;
}

export const signup = async (email, username, password) => {
    const res = await axios.post(`${url}/signup`, {
        email, 
        username,
        password
    });
    return res;
}


export const setCookie = (key, value) => {
    if(process.browser){
        cookie.set(key, JSON.stringify(value));
    }
}

export const getCookie = key => {
    if(process.browser){
        return cookie.get(key);
    }
}

export const removeCookie = key => {
    if(process.browser){
        cookie.remove(key);
    }
}


export const setLocalStorage = (key, value) => {
    if(process.browser){
        localStorage.setItem(key, JSON.stringify(value));
    }
}


export const removeLocalStorage = key => {
    if(process.browser){
        localStorage.removeItem(key);
    }
}

export const isAuthenticated = () => {
	if(process.browser){
		const cookieChecked = getCookie('token');
		if(cookieChecked){
			if(localStorage.getItem('user')){
				return JSON.parse(localStorage.getItem('user'));
			} else {
				return false;
			}
		}
	}
}

export const authenticate = (data, next) => {
    setLocalStorage('user', data);
    setCookie('token', data);
    next();
}

export const logout = async (next) => {
	if(localStorage.getItem('user')){
		removeCookie('token');
		removeLocalStorage('user');
	}

	next();
	
}
