import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

const Connection = ({ connected }) => {
  if (connected) {
    return <p className='lh-copy'>Holochain: ✅ Connected</p>
  } else {
    return <p className='lh-copy'>Holochain: 🔴 Disconnected</p>
  }
}

Connection.propTypes = {
  connected: PropTypes.bool.isRequired
}

const mapStateToProps = ({ connected }) => {
  return { connected }
}

export default connect(mapStateToProps)(Connection)
