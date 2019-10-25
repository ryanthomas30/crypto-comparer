import { GET_DATA } from './';
import axios from 'axios';

const SERVER_ROOT = 'http://127.0.0.1:5000/';

export const getCryptoData = () => async (dispatch) => {
	const response = await axios.get(SERVER_ROOT);
	dispatch({
		type: GET_DATA,
		payload: response.data
	});
};
