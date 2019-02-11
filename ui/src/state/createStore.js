import {
  applyMiddleware,
  compose,
  createStore as reduxCreateStore
} from 'redux'

import { connect } from '@holochain/hc-web-client'
import { holochainMiddleware } from '@holochain/hc-redux-middleware'
import reducer from './reducer'

// this url should use the same port set up the holochain container
const url = 'ws:localhost:8888'
const hcWc = connect(url)

const middleware = [holochainMiddleware(hcWc)]

let composeEnhancers
if (typeof window !== 'undefined') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
} else {
  composeEnhancers = compose
}

const initialState = { connected: false, lists: [], list_items: [] }

/* eslint-disable no-underscore-dangle */
const createStore = () =>
  reduxCreateStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  )
/* eslint-enable */

export default createStore
