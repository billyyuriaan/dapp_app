import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../redux/user'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link, useNavigate } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import gun from '../server'

const UserDropdown = () => {
  const navigator = useNavigate()
  const dispatch = useDispatch()
  const alias = useSelector((state) => state.user.alias)

  const userLogout = () => {
    var user = gun.user().recall({sessionStorage : true})

    user.leave()
    dispatch(logout())
    window.location.reload()
  }

  return (
    <>
        <NavDropdown title={alias} id="nav-dropdown">
            <NavDropdown.Item>
                <Nav.Link as={Link} to="/chat" className='text-dark'>Chat</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={userLogout}>
                Logout
            </NavDropdown.Item>
        </NavDropdown>
    </>
  )
}

export default UserDropdown