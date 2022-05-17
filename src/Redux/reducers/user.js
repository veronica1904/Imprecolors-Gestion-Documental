import { 

    LOGIN_USER_ERROR,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER,
} from "../constants/user";
import { initialState } from "../states/user";


export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER_REQUEST: {
            return {
                ...state,
                loading: true,
                error: null,
                message: ""
            };
        }
        case LOGIN_USER_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: null,
                rol: action.user.rol,
                isAuth: true,
                user: action.user.name,
                token: action.user.token,
                message: action.user.message
            };
        }
        case LOGIN_USER_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
                message: action.payload,
                
            };
        }
        case LOGOUT_USER: {
            return {
                ...state,
                loading: false,
                error: null,
                active: false,
                token: null,
                rol: null,
                isAuth: false,
                message: "Sesión cerrada",
            };
        }

        default: {
            return state;
        }
    }
}