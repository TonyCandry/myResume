import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import Fade from 'react-reveal/Fade';


function Presentation() {
  return (
    <Container fluid={true}>
      <Row id='home' className='background' style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Fade left>
        <Col sm="12" md='12' style={{ marginTop: '15%' }}>
          <h3 style={{ fontSize: '3em', fontFamily: 'WorkLight', color: '#FFF', textAlign: 'center' }}>Tony Candry</h3>
        </Col>
        </Fade>
        <Fade right>
        <Col sm="12" md='12' >
          <h1 style={{ fontSize: '3em', color: '#fff', fontFamily: 'Fredericka', textAlign: 'center' }}>Développeur web Front-end junior</h1>
        </Col>
        </Fade>
        <Col xs='12' md='12' style={{ textAlign: 'center' }}>
          <a href='#about'>
            <FontAwesomeIcon className='box bounce-1' icon={faChevronCircleDown} size='2x' color='#FFF' style={{ marginTop: '10%' }} />
          </a>
          <div style={{ color: '#fff', fontStyle: 'italic', marginTop: '7px' }}>Scroll Down</div>
        </Col>
      </Row>
    </Container>
  )
}
export default Presentation