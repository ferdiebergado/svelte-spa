/**
 * Returns the value of a specified cookie
 * @name getCookie
 * @function
 * @param {string} cname 
 * @returns {string}
 */
export const getCookie = cname => {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        // Cookie found
        if (c.indexOf(name) == 0) {
            // Return cookie value
            return c.substring(name.length, c.length);
        }
    }
    // Cookie not found, return an empty string
    return "";
}

export const deleteCookie = cname => {
    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}