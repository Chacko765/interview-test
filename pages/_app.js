
import 'antd/dist/antd.css'
import '../styles/globals.css'
import withReduxSaga from 'next-redux-saga'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

import withReduxStore from '../lib/with-redux-store'
function MyApp(props) {
  MyApp.propTypes = {
    reduxStore: PropTypes.any,
    router: PropTypes.any
  }

  const { reduxStore } = props
  const persistor = persistStore(reduxStore)

  // useEffect(() => {
  //   // it can be done if it required to redirect by storing loged user
  //   const isLoggedIn = localStorage.getItem('isLoggedIn')
  //   if (isLoggedIn) {
  //     onNavigate(Router, '/countries')
  //   }
  // })

  return (
    <Provider store={reduxStore}>
      <PersistGate loading={<div>Loading.........</div>} persistor={persistor}>
        <AppCore {...props} />
      </PersistGate>
    </Provider>
  )
}

const AppCore = (props) => {
  // eslint-disable-next-line react/prop-types
  const { Component, pageProps } = props

  return (
    <React.Fragment>
      <div className='appCore'>
        <div className='pages'  >
          <Component {...pageProps} />
        </div>
      </div>
    </React.Fragment>

  )
}

export default withReduxStore(withReduxSaga(MyApp))