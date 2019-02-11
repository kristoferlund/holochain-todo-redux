import AddForm from '../components/addForm'
import AllLists from '../components/allLists'
import Layout from '../components/layout'
import React from 'react'

const Home = () => (
  <Layout>
    <p className='lh-copy measure'>
      <a href='https://github.com/gatsbyjs/gatsby'>Gatsby</a>/React example
      using redux and{' '}
      <a href='https://github.com/holochain/hc-redux-middleware'>
        hc-redux-middleware
      </a>{' '}
      to communicate with holochain hApp (
      <a href='https://github.com/willemolding/holochain-rust-todo'>
        todo-list
      </a>
      ).
    </p>

    <h2 className='f6 fw7 ttu tracked'>Lists</h2>
    <AllLists />

    <h2 className='f6 fw7 ttu tracked'>Create new list</h2>
    <AddForm />
  </Layout>
)

export default Home
