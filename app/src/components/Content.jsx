import Container from "react-bootstrap/esm/Container"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Content = (props) => {
    const {className} = props

  return (
    <>
        <Container className={className}>
            <Row className="justify-content-center">
                <Col md={6}>
                    {props.children}
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Content