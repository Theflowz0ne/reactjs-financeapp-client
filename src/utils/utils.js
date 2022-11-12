import Cookies from "universal-cookie";

export const getJwtTokenCookie = () => {
    const cookies = new Cookies();
    return cookies.get("jwtToken");
}

export const setJwtTokenCookie = (jwtToken) => {
    const cookies = new Cookies();
    cookies.set("jwtToken", jwtToken);
}

export const removeJwtTokenCookie = () => {
    const cookies = new Cookies();
    cookies.remove("jwtToken");
}

export const logout = () => {
    removeJwtTokenCookie();
    window.location.href = "/login";
}
