// import { STORE_DATA } from "./Constants";

// const initialState = {
//     token: '',
//     showError: false,
//     error: '',
//     isLogin: false,
//     isLoading: false
// };

// export function login(state = initialState, action) {
//     switch (action.type) {
//         case 'SET_LOGIN_SUCCESS':
//             return {
//                 ...state,
//                 token: action.token,
//                 isLogin: true,
//                 isLoading: action.isLoading,
//                 showError: action.showError,
//             };
//         case 'SET_LOGIN_ERROR':
//             return {
//                 ...state,
//                 error: action.error,
//                 showError: action.showError,
//                 isLogin: false,
//             };
//         default:
//             return state;
//     }
// }
