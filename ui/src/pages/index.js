import AddForm from '../components/addForm'
import AllLists from '../components/allLists'
import Layout from '../components/layout'
import React from 'react'

const Home = () => (
  <Layout>
    <h3>TODO LISTS</h3>
    <AddForm />
    <AllLists />
  </Layout>
)

export default Home
