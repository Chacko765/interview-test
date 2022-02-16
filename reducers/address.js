import { actionTypes } from '../actions/address'

export const initialState = {

	fetchingCountries: false,
	fetchCountriesSuccessful: false,
	countries: [],

	error: null
}

function addressReducer (state = initialState, action) {
	switch (action.type) {
	case actionTypes.CLEAR_ERROR: return { ...state, ...{ error: null } }
	case actionTypes.STATE_RESET: return { ...state, ...action.resetState }

	case actionTypes.GET_COUNTRIES_REQUEST: return { ...state, fetchingCountries: true }
	case actionTypes.GET_COUNTRIES_SUCCESS: return { ...state, fetchingCountries: false, fetchCountriesSuccessful: true, countries: action.countries }
	case actionTypes.GET_COUNTRIES_FAILURE: return { ...state, fetchingCountries: false, fetchCountriesSuccessful: false, error: action.error }
	
	default:
		return state
	}
}

export default addressReducer
