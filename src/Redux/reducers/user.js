import { 

    GET_USER_ERROR,
    GET_USER_SUCESS,
    LIST_USERS,
    LIST_USERS_ERROR,
    LIST_USERS_SUCESS,
    LOGIN_USER_ERROR,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER,
    REGISTER_USER,
    GET_USER,
    REGISTER_USER_ERROR,
    REGISTER_USER_SUCESS,
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
        case REGISTER_USER: {
            return {
                ...state,
                loading: true,
                error: null,
                message: action.payload.message
            };
        }
        case REGISTER_USER_SUCESS: {
            return {
                ...state,
                loading: false,
                error: null,
                message: action.user.message
            };
        }
        case REGISTER_USER_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
                message: action.payload,
                
            };
        }
        case LIST_USERS: {
            return {
                ...state,
                loading: true,
                error: null,
                message: null
            };
        }
        case LIST_USERS_SUCESS: {
            return {
                ...state,
                loading: false,
                error: null,
                listUsers: action.listUsers
            };
        }
        case LIST_USERS_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
                message: action.payload,
                
            };
        }

        //get user
        case GET_USER: {
            return {
                ...state,
                loading: true,
                error: null,
                message: null
            };
        }
        case GET_USER_SUCESS: {
            console.log('action >>> ', action)
            return {
                ...state,
                loading: false,
                error: null,
                detailUser: action.detailUser
            };
        }
        case GET_USER_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
                message: action.payload,
                
            };
        }


        default: {
            return state;
        }
    }
}