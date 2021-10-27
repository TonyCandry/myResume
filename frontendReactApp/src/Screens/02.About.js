import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import Zoom from 'react-reveal/Zoom'
import TonyCandry from '../images/Tony.jpg'

function About() {
    return (
        <Container fluid={true} id='about' style={{ width: '80%', paddingTop: '80px', paddingBottom: '10px' }}>
            <div style={{ width: '100%', paddingTop: '20px', paddingBottom: '10px', display: 'flex', flexDirection: 'column', border: '1px #dfe6e9 solid', boxShadow: '0 0.5rem 1rem rgb(0 0 0 / 50%)', backgroundColor: '#dfe4ea' }}>
                <Row xs='12' style={{ width: 'auto', marginTop: '10px' }}>
                    <h1 style={{ textAlign: 'center', fontFamily: 'WorkRegular' }}>A propos de moi</h1>
                </Row>

                <Row style={{ width: '100%', display: ' flex', margin: 'auto' }}>
                    <Col xs='12' sm='4' style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ marginTop: '20px', alignSelf: 'center' }}>
                            <Zoom>
                                <img src={TonyCandry} alt='avatar' style={{ width: '200px', borderRadius: '50px' }} />
                            </Zoom>
                        </div>
                        <div style={{ marginTop: '30px', textAlign: 'justify', alignSelf: 'center' }}>
                            <p><strong>Nom</strong> : Tony Candry </p>
                            <p><strong>Age</strong> : 34 ans</p>
                            <p><strong>Ville</strong> : Seine-et-Marne (77)</p>
                            <p><strong>email</strong> : tony_candry@hotmail.com</p>
                        </div>
                    </Col>

                    <Col xs='12' sm='8' style={{ textAlign: 'Justify', marginTop: '30px' }}>
                        <p>Bonjour, je m'appelle Tony Candry, j'ai 34 ans et je suis Développeur web Junior</p>
                        <p>Auparavant, j'ai travaillé pendant preque 15 ans dans le monde du Retail. Cette expérience m'a appris à être autonome, rigoureux et gérer mon temps de travail.</p>
                        <p>Ayant soif d'un nouveau challenge, j'ai décidé de faire une reconversion professionnelle pour devenir Développeur web. Curieux et rigoureux, j'aime résoudre les problèmes.</p>
                        <p>J'ai suivi une formation de Développeur web fullstack Javascript via l'organisme La Capsule sur Paris où j'y ai obtenu un titre RNCP niveau 6. Durant ce cursus de formation, j'ai appris différents langages de programmation comme Javascript, React, React Native, Redux, Express et d'autres... Par ailleurs, j'ai également pu réaliser des projets qui m'ont permis de d'apprendre à travailler de manière organisé.</p>
                        <p>Je suis prêt à mettre à votre service toute mes compétences. N'hésitez pas à me contacter pour plus d'informations</p>
                        <div style={{textAlign:'center'}}>
                            <a href='/CV_TONYCANDRY.pdf' download  >
                                <Button color='danger' style={{ marginTop: '20px', width: '190px', height: '45px', marginRight:'10px', marginLeft:'10px' }}>
                                    Télécharger mon CV
                                </Button>
                            </a>
                        <a href='#message'  >
                            <Button color='success' style={{ marginTop: '20px', width: '190px', height: '45px' }}>
                                Me contacter
                            </Button>
                        </a>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default About