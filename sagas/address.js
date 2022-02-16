import { call,  put } from 'redux-saga/effects'
import request from '../util/request'

import {
	getCountriesSuccess,
	getCountriesFailure,
} from '../actions/address'

export function* countriesGet() {
	try {
		const response = yield call(request, 'https://restcountries.com/v2/all?fields=name,region,flag', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
				// Authorization: accessToken,
				// Tenant: TENENT,
				// Platform: PLATFORM
			}
		})
		if (response) {
			yield put(getCountriesSuccess(response))
		} else {
			yield put(getCountriesFailure(response?.message ? response?.message : 'Failed to fetch countries.'))
		}
	} catch (error) {
		yield put(getCountriesFailure(error.response?.error?.message ? error.response.error.message : 'UNKNOWN ERROR'))
	}
}


const AddressSaga = {
	countriesGet
}
export default AddressSaga
