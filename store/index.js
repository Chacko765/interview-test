import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from '../reducers'
import rootSaga from '../sagas'

const persistConfig = {
	key: 'ug-primary-1',
	storage
	// whitelist: ['count'], // place to select which state you want to persist
}

const bindMiddleware = (middleware) => {
	if (process.env.NODE_ENV !== 'production') {
		const { composeWithDevTools } = require('redux-devtools-extension')
		return composeWithDevTools(applyMiddleware(...middleware))
	}
	return applyMiddleware(...middleware)
}

function configureStore (initialState) {
	const persistedReducer = persistReducer(persistConfig, rootReducer)
	const sagaMiddleware = createSagaMiddleware()
	const store = createStore(
		persistedReducer,
		initialState,
		bindMiddleware([sagaMiddleware])
	)

	store.sagaTask = sagaMiddleware.run(rootSaga)

	return store
}

export default configureStore
