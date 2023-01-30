import React from 'react'
import { Navbarsx, Content } from '../components'

const Home = () => {
  return (
    <>
      <Navbarsx />
      <Content className="mt-4 mb-4">
        <h1 className='text-center'>Hello World</h1>
      </Content>
    </>
  )
}

export default Home