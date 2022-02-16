import { all, takeLatest } from 'redux-saga/effects'

import AddressActions from '../actions/address'


import AddressSaga from './address'

function* rootSaga() {
	yield all([
		takeLatest(AddressActions.actionTypes.GET_COUNTRIES_REQUEST, AddressSaga.countriesGet)
	])
}

export default rootSaga
