import { CHANGE_MENU } from "../constants/app";
import { initialState } from "../states/app";

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_MENU: {
            return {
                ...state,
                isOpenMenu: !state.isOpenMenu
            };
        }
        default:
            return state;
    }
}