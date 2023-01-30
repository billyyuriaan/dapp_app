import { Content } from '../../components';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import gun from '../../server';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

const Register = () => {
  const username = useRef()
  const password = useRef()
  
  const registerForm = () => {
    // pass = test12345
    var user = gun.user().recall({sessionStorage : true})
    user.create(username.current.value, password.current.value, (ack) => {
        if (ack.err) {
            alert(ack.err)
            return
        }

        alert("You Have Successfull on register!")
    })
  }

  return (
    <>
      <br /><br /><br /><br />
      <Content className="">
        <Card className='bg-white'>
          <Card.Body>
            <Card.Title className='text-center'>Register</Card.Title>
            <Form>
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
                <Button variant="success" type="submit" to='/login' as={Link}>
                  Login
                </Button>
                <Button variant="primary" onClick={() => registerForm()}>
                  Submit
                </Button>
              </ButtonToolbar>
            </Form>
          </Card.Body>
        </Card>
      </Content>
    </>
  )
}

export default Register