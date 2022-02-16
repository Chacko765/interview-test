export const actionTypes = {

	CLEAR_ERROR: 'ADDRESS/CLEAR_ERROR',
	STATE_RESET: 'ADDRESS/STATE_RESET',

	GET_COUNTRIES_REQUEST: 'ADDRESS/GET_COUNTRIES_REQUEST',
	GET_COUNTRIES_SUCCESS: 'ADDRESS/GET_COUNTRIES_SUCCESS',
	GET_COUNTRIES_FAILURE: 'ADDRESS/GET_COUNTRIES_FAILURE',

}

export const clearError = () => ({ type: actionTypes.CLEAR_ERROR })
export const stateReset = (resetState) => ({ type: actionTypes.STATE_RESET, resetState })

export const getCountriesRequest = () => ({ type: actionTypes.GET_COUNTRIES_REQUEST })
export const getCountriesSuccess = (countries) => ({ type: actionTypes.GET_COUNTRIES_SUCCESS, countries })
export const getCountriesFailure = (error) => ({ type: actionTypes.GET_COUNTRIES_FAILURE, error })

const AddressActions = {
	actionTypes,

	clearError,
	stateReset,

	getCountriesRequest,
	getCountriesSuccess,
	getCountriesFailure

}

export default AddressActions
