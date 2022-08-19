import { 
    LIST_USERS,
    LOGIN_USER_REQUEST, 
    LOGOUT_USER,
    REGISTER_USER
} from "../constants/user"

export const actionLoginUser = (formData) => {
    return {
        type: LOGIN_USER_REQUEST,
        payload: formData
    }
}
export const actionLogout = () => {
    return {
        type: LOGOUT_USER
    }
}
export const registerUser = (data) => {
    return {
        type: REGISTER_USER,
        payload: data
    }
}
export const gertUsers = (type) => {
    console.log('type >>> ', type)
    return {
        type: LIST_USERS,
        payload: type
    }
}