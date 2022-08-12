export const userState = state => state.user;

export const isAuth = state => {
    return userState(state).isAuth;
}

export const getToken = state => userState(state).token;

export const getTypeUser = state   => {
    return userState(state).rol
};

export const getListUsers = state   => {
    return userState(state).listUsers
};