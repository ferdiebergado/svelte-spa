import { writable } from 'svelte/store';

const getItem = item => {
    return writable(localStorage.getItem(item) || "");
}

const getObject = object => {
    return writable(JSON.parse(localStorage.getItem(object)) || "");
}

export const error = getItem("error");
export const user = getObject("user");

error.subscribe(error => localStorage.setItem("error", error));
user.subscribe(newUser => {
    if (newUser == undefined) {
        localStorage.removeItem("user");
    } else {
        localStorage.setItem("user", JSON.stringify(newUser))
    }
});
