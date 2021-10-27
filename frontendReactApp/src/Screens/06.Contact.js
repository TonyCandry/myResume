import React, { useState, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import Jump from 'react-reveal/Jump'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import ReCAPTCHA from "react-google-recaptcha"


function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState([])

    const captcha = useRef(null)

    var handleSubmitMessage = async () => {
        const data = await fetch('/message', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `nameFromFront=${name}&emailFromFront=${email}&messageFromFront=${message}`
        })
        const body = await data.json()
        if (body.result === true) {
            setName('')
            setEmail('')
            setMessage('')
            setErrorMessage([])
        } else {
            setErrorMessage(body.error)
        }
    }

    var errorSubmit = <div>
        {errorMessage.map((error, i) => {
            return (<p key={i} style={{ color: 'red', alignSelf: 'center' }}>{error}</p>)
        })}
    </div>

    const onChange = () => {
        if (captcha.current.getValue()) {
            console.log('norobot')
        }
    }

    const submit = (e) => {
        e.preventDefault()
        if (captcha.current.getValue()) {
            console.log('send form')
        } else {
            console.log('please check captcha')
        }
    }

    return (
        <Container id='contact' fluid={true} style={{ backgroundColor: '#34495E', display: 'flex', flexDirection: 'column' }}>
            <Row style={{ textAlign: 'center' }}>
                <Jump>
                    <h1 style={{ marginBottom: '40px', marginTop: '40px', color: '#B0BEC5', textDecoration: 'underline', fontWeight: 'bold' }}>Contactez-moi !</h1>
                </Jump>
                <h5 style={{ color: '#B0BEC5', marginBottom: '20px' }}>Je suis actuellement à la recherche d'un poste de Développeur web Front-end</h5>
            </Row>
            <Row xs='12' sm='2' style={{ marginBottom: '30px', width: '100%', margin: 'auto' }}>
                <Col style={{ margin: 'auto' }}>
                    <Form style={{ width: '100%' }} onSubmit={submit}>
                        <FormGroup >
                            <Label for="Nom" style={{ color: 'white' }}>Nom</Label>
                            <Input onChange={(e) => (setName(e.target.value))} type="name" name="name" value={name} id="Nom" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Email" style={{ color: 'white' }}>Email</Label>
                            <Input onChange={(e) => (setEmail(e.target.value))} type="email" name="email" value={email} id="Email" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Message" style={{ color: 'white' }}>Votre message</Label>
                            <Input onChange={(e) => (setMessage(e.target.value))} type="textarea" name="message" value={message} id="Message" style={{ height: '100px' }} />
                        </FormGroup>
                        <div className='g-recaptcha'>
                            <ReCAPTCHA
                                ref={captcha}
                                sitekey="6Lcq5_UcAAAAAFs9UaAHWI7LUd5igGcDRjiY9JTI"
                                onChange={onChange}
                            />
                        </div>
                        {errorSubmit}
                        <Button type='submit' onClick={() => handleSubmitMessage()} style={{ marginTop: '20px' }}>Envoyer</Button>

                    </Form>
                </Col>
            </Row>
            <Row id='message' xs='12' sm='12' style={{ marginTop: '30px', height: '40px', textAlign: 'center', backgroundColor: '#263238', display: 'flex', flexDirection: 'column' }}>
                <Col >
                    <a class="dark" href="mailto:tony_candry@hotmail.com"><FontAwesomeIcon icon={faEnvelope} size='1x' color='#FFF' style={{ marginRight: '5px' }} /></a>
                    <a href="http://linkedin.com/in/tony-candry" target='_blank' rel="noreferrer" ><FontAwesomeIcon icon={faLinkedin} size='1x' color='#FFF' style={{ marginLeft: '5px' }} /></a>
                    <a href="https://github.com/TonyCandry" target='_blank' rel="noreferrer" ><FontAwesomeIcon icon={faGithub} color='#fff' size='1x' style={{ marginLeft: '8px' }} /></a>
                </Col>
                <Col style={{ fontSize: '0.7em', color: 'white' }}>Tony Candry © 2021 - Tous droits réservés</Col>
            </Row>
        </Container>
    )
}

export default Contact