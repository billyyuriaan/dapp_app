import {useState, useEffect} from 'react'
import { checkLogin } from '../middleware/auth'
import {useSelector} from 'react-redux'
import Container from 'react-bootstrap/Container'
import UserDropdown from './UserDropdown'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Navbarsx = () => {
  const [isLogin, setIsLogin] = useState(false)  

  useEffect(() => {
    return async () => {
      await checkLogin()
        .then((val) => {
          setIsLogin(true)
          console.log(val)
        })
        .catch((err) => {
          setIsLogin(false)
          console.log(err)
        })
    }
  }, [])

  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">Navbar</Navbar.Brand>
          <Nav>
            <Nav.Link to="/" as={Link}>Home</Nav.Link>
            <Nav.Link to="/about" as={Link}>About</Nav.Link>
            {
              isLogin ? <UserDropdown /> : <Nav.Link to="/login" as={Link}>Login</Nav.Link>
            }
          </Nav>
        </Container>
      </Navbar>  
    </>
  )
}

export default Navbarsx