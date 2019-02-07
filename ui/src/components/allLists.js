import List from './list'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

const printList = list => {
  return <List key={list.id} listId={list.id} />
}

const AllLists = ({ lists }) => (
  <div>
    Lists
    {lists.map(printList)}
  </div>
)

AllLists.propTypes = {
  lists: PropTypes.array.isRequired
}

const mapStateToProps = ({ lists }) => {
  return { lists }
}

export default connect(mapStateToProps)(AllLists)
