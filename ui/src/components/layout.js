import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { connect } from 'react-redux'

import { createHolochainAsyncAction } from '@holochain/hc-redux-middleware'

const createList = createHolochainAsyncAction('todo-list', 'list', 'main')

// later on when you want to create dispatch an action to call the function with some params
const createListAction = createList.create({
  list: { name: 'test list' }
})
// const createListAction = createList.create({})
const Counter = ({ count, increment, create_list }) => (
  <div>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={create_list}>Create list</button>
  </div>
)

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired
}

const mapStateToProps = ({ count }) => {
  return { count }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: `INCREMENT` }),
    create_list: () => dispatch(createListAction)
  }
}

const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

class DefaultLayout extends React.Component {
  render () {
    return (
      <div>
        <Link to='/'>
          <h3>Redux example</h3>
        </Link>
        <ConnectedCounter />
        <ul>
          <li>
            <Link to='/a/'>a</Link>
          </li>
          <li>
            <Link to='/b/'>b</Link>
          </li>
          <li>
            <Link to='/c/'>c</Link>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

export default DefaultLayout
