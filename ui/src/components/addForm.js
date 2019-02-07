import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { createHolochainAsyncAction } from '@holochain/hc-redux-middleware'

class AddForm extends React.Component {
  constructor () {
    super()

    this.state = {
      listName: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.createList = this.createList.bind(this)
  }

  handleInputChange (event) {
    const { target } = event

    this.setState({
      listName: target.value
    })
  }

  createList () {
    const action = createHolochainAsyncAction(
      'test-instance',
      'lists',
      'main',
      'create_list'
    )
    this.props.dispatch(
      action.create({
        list: { name: this.state.listName }
      })
    )
  }

  render () {
    return (
      <div>
        List name: <input type='text' onChange={this.handleInputChange} />{' '}
        <button onClick={this.createList}>Create list</button>
      </div>
    )
  }
}

AddForm.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(AddForm)
