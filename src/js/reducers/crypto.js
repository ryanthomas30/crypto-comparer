import { GET_DATA } from '../actions';

export default function (state = {}, action) {
	switch (action.type) {
		case GET_DATA:
			return { ...state, ether: action.payload.ETH, bitcoin: action.payload.BTC };
		default:
			return state;
	}
}
