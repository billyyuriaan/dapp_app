import { useRef, useEffect } from 'react'
import { Content } from '../../components';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/user';
import { useDispatch, useSelector } from 'react-redux';
import { checkLogin } from '../../middleware/auth';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import gun from '../../server';

const Login = () => {
  const navigator = useNavigate()
  const dispatch = useDispatch()
  const username = useRef()
  const password = useRef()

  useEffect(() => {
    return async () => {
      await checkLogin()
        .then((val) => {
          navigator("/")
        })
        .catch((err) => {})
    }
  }, [])
  

  const loginForm = (e) => {
    e.preventDefault()

    var user = gun.user().recall({sessionStorage: true})
    user.auth(username.current.value, password.current.value, (ack) => {
      if (ack.err) {
        alert(ack.err)
        return
      }

      const payload = {
        alias: username.current.value,
        pub : ack.get
      }

      dispatch(login(payload));
      navigator("/")
    })
  }

  return (
    <>
      <br /><br /><br /><br />
      <Content className="">
        <Card className='bg-white'>
          <Card.Body>
            <Card.Title className='text-center'>Login</Card.Title>
            <Form onSubmit={loginForm}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" ref={username}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" ref={password}/>
              </Form.Group>
              <br />
              <ButtonToolbar className='justify-content-between'>
                <Button variant="success" type="submit" to='/' as={Link}>
                  Back
                </Button>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <Button variant="success" type="submit" to='/register' as={Link}>
                  Register
                </Button>
              </ButtonToolbar>
            </Form>
          </Card.Body>
        </Card>
      </Content>
    </>
  )
}

export default Login