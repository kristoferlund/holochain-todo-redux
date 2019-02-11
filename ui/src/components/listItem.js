import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

class ListItem extends React.Component {
  render () {
    const { itemText } = this.props

    return <div>– {itemText}</div>
  }
}

ListItem.propTypes = {
  itemText: PropTypes.string.isRequired
}

export default connect()(ListItem)
