import Connection from './connection'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

class DefaultLayout extends React.Component {
  render () {
    return (
      <div className='w-100 sans-serif pv4 ph3 ph5-ns bg-white black-70'>
        <h1 className='f2 lh-copy'>
          <span role='img' aria-label='List'>
            🗒
          </span>{' '}
          holochain-todo-redux
        </h1>
        <Connection />
        {this.props.children}
        <p className='lh-copy'>
          <span role='img' aria-label='Link'>
            🔗
          </span>{' '}
          <a href='https://github.com/kristoferlund/holochain-todo-redux'>
            https://github.com/kristoferlund/holochain-todo-redux
          </a>
        </p>
      </div>
    )
  }
}

DefaultLayout.propTypes = {
  children: PropTypes.any.isRequired
}

export default connect()(DefaultLayout)
