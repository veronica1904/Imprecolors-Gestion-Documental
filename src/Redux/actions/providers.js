import { 
    PROVIDER_REQUEST
} from "../constants/providers"

export const actionProviders= (provider) => {
    return {
        type: PROVIDER_REQUEST,
        payload: provider
    }
}
