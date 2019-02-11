import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { createHolochainAsyncAction } from '@holochain/hc-redux-middleware'

let item_counter = 0

class List extends React.Component {
  constructor () {
    super()

    this.addItem = this.addItem.bind(this)
  }

  addItem () {
    const { listAddress } = this.props

    const action = createHolochainAsyncAction(
      'test-instance',
      'lists',
      'main',
      'add_item'
    )
    this.props.dispatch(
      action.create({
        list_item: { text: `An item ${++item_counter}`, completed: false },
        list_addr: listAddress
      })
    )
  }

  render () {
    const { listName } = this.props

    return (
      <div className='cf'>
        <div className='fl w-100 w-25-ns pv2'>{listName}</div>
        <div className='fl w-100 w-25-ns pv2'>
          <button onClick={this.addItem}>Add item</button>
        </div>
      </div>
    )
  }
}

List.propTypes = {
  listAddress: PropTypes.string.isRequired,
  listName: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = ({ lists }) => {
  return { lists }
}

export default connect(mapStateToProps)(List)
