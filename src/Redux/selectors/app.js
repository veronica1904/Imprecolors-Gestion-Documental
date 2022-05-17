export const appState = state => state.app;

export const getStateMenu = state => appState(state).isOpenMenu;