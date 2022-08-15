import { 
    PROVIDER_REQUEST,
    PROVIDER_SUCESS,
    PROVIDER_ERROR
} from "../constants/providers";
import { initialState } from "../states/providers";


export default function registerProviders(state = initialState, action) {
    switch (action.type) {
  
        case PROVIDER_REQUEST: {
            return {
                ...state,
                loading: true,
                error: null,
                message: null
            };
        }
        case PROVIDER_SUCESS: {
            return {
                ...state,
                loading: false,
                error: null,
                provider: "provedor creado"
            };
        }
        case PROVIDER_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
                message: action.payload.message
                
            };
        }

        default: {
            return state;
        }
    }
}