import {
  createStore as reduxCreateStore,
  applyMiddleware,
  compose
} from 'redux'

import { connect } from '@holochain/hc-web-client'
import { holochainMiddleware } from '@holochain/hc-redux-middleware'

const reducer = (state, action) => {
  if (action.type === `INCREMENT`) {
    return Object.assign({}, state, {
      count: state.count + 1
    })
  }
  return state
}

const initialState = { count: 0 }

// this url should use the same port set up the holochain container
const url = 'ws:localhost:8888'
const hcWc = connect(url)

const middleware = [holochainMiddleware(hcWc)]

let composeEnhancers
if (typeof window !== `undefined`) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
} else {
  composeEnhancers = compose
}

/* eslint-disable no-underscore-dangle */
const createStore = () =>
  reduxCreateStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  )
/* eslint-enable */

export default createStore
