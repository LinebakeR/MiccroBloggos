import jwt_decode from "jwt-decode";

export const getUser = ()  => {
    const token = localStorage.getItem('jwtSecret');
    if(token) {
        const user = jwt_decode(token);
        return user;
    }
    return {};
};
