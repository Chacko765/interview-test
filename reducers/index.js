import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { createMemoryHistory } from 'history'

import { actionTypes } from '../actions/address'

import addressReducer from './address'

const history = createMemoryHistory()
const appReducer = combineReducers({
	router: connectRouter(history),
	address: addressReducer
})

const rootReducer = (state, action) => {
	if (action.type === actionTypes.RESET_STORE) {
		return appReducer(undefined, action)
	}

	return appReducer(state, action)
}

export default rootReducer
