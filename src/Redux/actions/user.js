import { 
    LOGIN_USER_REQUEST, 
    LOGOUT_USER
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