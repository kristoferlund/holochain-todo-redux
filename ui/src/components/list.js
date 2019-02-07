import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { createHolochainAsyncAction } from '@holochain/hc-redux-middleware'

class List extends React.Component {
  constructor () {
    super()

    this.addItem = this.addItem.bind(this)
  }

  addItem () {
    const { listId } = this.props

    const action = createHolochainAsyncAction(
      'test-instance',
      'lists',
      'main',
      'add_item'
    )
    this.props.dispatch(
      action.create({
        list_item: { text: 'an item', completed: false },
        list_addr: listId
      })
    )
  }

  render () {
    const { listId } = this.props

    return (
      <div>
        id: {listId} <button onClick={this.addItem}>Add item</button>
      </div>
    )
  }
}

List.propTypes = {
  listId: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default connect()(List)
