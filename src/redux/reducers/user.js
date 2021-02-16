import {
	GET_POSTS_REQUEST,
	GET_POSTS_SUCCESS,
	GET_POSTS_FAIL
} from '../constants/App';

const initialState = {
	data:[]
};

export default function UserReducer(state = initialState, action = {}) {
	switch (action.type) {
		case GET_POSTS_REQUEST:
			
			return {
				fetching: true,
				error: ''
			};
		case GET_POSTS_SUCCESS:
			
			return {
				...state,
				data: action.data,
				fetching: false,
				error: ''
			};
		case GET_POSTS_FAIL:
			return {
				...state,
				data: action.data,
				fetching: false,
				error: ''
			};
		default:
			return state;
	}
}