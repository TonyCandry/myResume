import React from 'react'
import { Container, Row, Col, Toast, ToastBody, ToastHeader, Progress } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faServer, faMobileAlt, faLaptop } from '@fortawesome/free-solid-svg-icons'
import Fade from 'react-reveal/Fade';


function Skills() {
    return (
        <Container fluid={true} id='competences'>
            <Row>
                <h1 style={{ textAlign: 'center', marginTop: '70px', fontFamily: 'WorkRegular' }}>Mes compétences</h1>
            </Row>
            <Row xs='12'>
                <Col xs='12' sm='6'>
                    <Fade right>
                        <Toast className='toastStyle'>
                            <ToastHeader style={{ fontSize: '1.5em', backgroundColor: '#dfe4ea' }}><FontAwesomeIcon icon={faCode} style={{ marginRight: '10px' }} />Front-end</ToastHeader>
                            <ToastBody style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '85%' }}>
                                <div className='marginSkills'><span style={{ width: '110px' }}>HTML5</span><Progress animated value={100} style={{ width: '100%' }}>100%</Progress></div>
                                <div className='marginSkills'><span style={{ width: '110px' }}>CSS</span><Progress animated value={80} style={{ width: '100%' }}>80%</Progress></div>
                                <div className='marginSkills'><span style={{ width: '110px' }}>Javascript</span><Progress animated value={60} style={{ width: '100%' }}>60%</Progress></div>
                                <div className='marginSkills'><span style={{ width: '110px' }}>React</span><Progress animated value={70} style={{ width: '100%' }}>70%</Progress></div>
                                <div className='marginSkills'><span style={{ width: '110px' }}>Redux</span><Progress animated value={70} style={{ width: '100%' }}>70%</Progress></div>
                                <div className='marginSkills'><span style={{ width: '110px' }}>JQuery</span><Progress animated value={60} style={{ width: '100%' }}>60%</Progress></div>
                            </ToastBody>
                        </Toast>
                    </Fade>
                </Col>
                <Col xs='12' sm='6'>
                    <Fade left>
                        <Toast className='toastStyle'>
                            <ToastHeader style={{ fontSize: '1.5em', backgroundColor: '#dfe4ea' }}><FontAwesomeIcon icon={faServer} style={{ marginRight: '10px' }} />Back-end</ToastHeader>
                            <ToastBody style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '80%' }}>
                                <div className='marginSkills'><span style={{ width: '110px' }}>Node.js</span><Progress animated color="danger" value={60} style={{ width: '100%' }}>60%</Progress></div>
                                <div className='marginSkills'><span style={{ width: '110px' }}>Express</span><Progress animated color="danger" value={60} style={{ width: '100%' }}>60%</Progress></div>
                                <div className='marginSkills'><span style={{ width: '110px' }}>MongodB</span><Progress animated color="danger" value={60} style={{ width: '100%' }}>60%</Progress></div>
                                <div className='marginSkills'><span style={{ width: '110px' }}>API REST</span><Progress animated color="danger" value={60} style={{ width: '100%' }}>60%</Progress></div>
                            </ToastBody>
                        </Toast>
                    </Fade>
                </Col>
                <Col xs='12' sm='6'>
                    <Fade right>
                        <Toast className='toastStyle'>
                            <ToastHeader style={{ fontSize: '1.5em', backgroundColor: '#dfe4ea' }}><FontAwesomeIcon icon={faMobileAlt} style={{ marginRight: '10px' }} />Mobile</ToastHeader>
                            <ToastBody style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '80%' }}>
                                <div className='marginSkills'><span style={{ width: '110px' }}>React Native</span><Progress animated color="success" value={70} style={{ width: '100%' }}>70%</Progress></div>
                                <div className='marginSkills'><span style={{ width: '110px' }}>Expo Go</span><Progress animated color="success" value={80} style={{ width: '100%' }}>80%</Progress></div>
                            </ToastBody>
                        </Toast>
                    </Fade>
                </Col>
                <Col xs='12' sm='6'>
                    <Fade left>
                        <Toast className='toastStyle' style={{ marginBottom: '50px' }}>
                            <ToastHeader style={{ fontSize: '1.5em', backgroundColor: '#dfe4ea' }}><FontAwesomeIcon icon={faLaptop} style={{ marginRight: '10px' }} />Environnement de travail</ToastHeader>
                            <ToastBody style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '80%' }}>
                                <div ><p><strong>Système d'exploitation: </strong>Windows 10, MacOS</p></div>
                                <div ><p><strong>Editeur de code :</strong> Visual studio</p></div>
                                <div ><p><strong>Workflow :</strong> Git, Github, Heroku</p></div>
                                <div ><p><strong>Outils :</strong> Terminal, Postman, Discord</p></div>
                            </ToastBody>
                        </Toast>
                    </Fade>
                </Col>
            </Row>
        </Container>
    )
}

export default Skills