export const TOGGLE_LOADING = 'TOGGLE_LOADING';
export const CLEAR_LOADING = 'CLEAR_LOADING';

export const toggleLoading = start => ({ type: TOGGLE_LOADING, start });
export const clearLoading = () => ({ type: CLEAR_LOADING });
