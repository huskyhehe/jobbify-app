import { initialState } from './appContext';
import { 
    CLEAR_ALERT, 
    DISPLAY_ALERT, 
    SETUP_USER_BEGIN,
    SETUP_USER_SUCCESS,
    SETUP_USER_ERROR, 
    LOGOUT_USER,
    UPDATE_USER_BEGIN,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR,
    TOGGLE_SIDEBAR,
    } from './actions';

const reducer = (state, action) => {
    switch(action.type) {
        case DISPLAY_ALERT:
            return {
                ...state,
                showAlert: true,
                alertType: 'danger',
                alertText: 'Please provide all values!'
            };

        case CLEAR_ALERT:
            return {
                ...state,
                showAlert: false,
                alertType: '',
                alertText: ''
            };

        case SETUP_USER_BEGIN:
            return {
                ...state, 
                isLoading: true
            };

        case SETUP_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                token: action.payload.token,
                user: action.payload.user,
                userLocation: action.payload.location,
                jobLocation: action.payload.location,
                showAlert: true,
                alertType: 'success',
                alertText: action.payload.alertText
            };

        case SETUP_USER_ERROR:
            return {
                ...state,
                isLoading: false,
                showAlert: true,
                alertType: 'danger',
                alertText: action.payload.msg
            };
        
        case LOGOUT_USER:
            return {
                ...initialState,
                user: null,
                token: null,
                jobLocation: '',
                userLocation: ''  
            };
        

        case UPDATE_USER_BEGIN:
            return {
                ...state, 
                isLoading: true
            };
        
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                token: action.payload.token,
                user: action.payload.user,
                userLocation: action.payload.location,
                jobLocation: action.payload.location,
                showAlert: true,
                alertType: 'success',
                alertText: 'User Profile Updated!'
            };

        case UPDATE_USER_ERROR:
            return {
                ...state,
                isLoading: false,
                showAlert: true,
                alertType: 'danger',
                alertText: action.payload.msg
            };        
        
        case TOGGLE_SIDEBAR:
            return { 
                ...state, 
                showSidebar: !state.showSidebar 
            };

        default:
            throw new Error(`no such action : ${action.type}`);
    };
};

export default reducer;