import AllListItems from './allListItems'
import List from './list'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

const emptyListMsg = lists => {
  if (lists.length === 0) {
    return 'No lists here yet, create some below!'
  }
  return null
}

const printList = list => {
  return (
    <div className='mw9'>
      <List
        key={list.list_addr}
        listAddress={list.list_addr}
        listName={list.name}
      />
      <AllListItems listAddress={list.list_addr} />
    </div>
  )
}

const AllLists = ({ lists }) => (
  <p className='lh-copy'>
    {emptyListMsg(lists)}
    {lists.map(printList)}
  </p>
)

AllLists.propTypes = {
  lists: PropTypes.array.isRequired
}

const mapStateToProps = ({ lists }) => {
  return { lists }
}

export default connect(mapStateToProps)(AllLists)
