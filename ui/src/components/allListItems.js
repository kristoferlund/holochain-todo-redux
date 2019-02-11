import ListItem from './listItem'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

function filteredList (listAddress) {
  return function printList (listItem) {
    if (listItem.list_addr === listAddress) {
      return (
        <ListItem
          key={listItem.item_addr}
          itemAddress={listItem.item_addr}
          itemText={listItem.text}
        />
      )
    }
  }
}

const AllListItems = ({ list_items, listAddress }) => (
  <div>{list_items.map(filteredList(listAddress))}</div>
)

AllListItems.propTypes = {
  list_items: PropTypes.array.isRequired,
  listAddress: PropTypes.string.isRequired
}

const mapStateToProps = ({ list_items }) => {
  return { list_items }
}

export default connect(mapStateToProps)(AllListItems)
