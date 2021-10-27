import React from 'react'
import { Container, Row, List } from 'reactstrap'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToolbox, faUserGraduate } from '@fortawesome/free-solid-svg-icons'


function Experiences() {
    return (
        <Container fluid={true} id='parcours'>
            <Row style={{ display: 'flex', backgroundColor: '#a5b1c2', paddingBottom: '60px' }}>
                <h1 style={{ textAlign: 'center', marginTop: '70px', marginBottom: '50px', fontFamily: 'WorkRegular' }}>Mon parcours</h1>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2021"
                        iconStyle={{ background: '#A5D6A7', color: '#fff', paddingRight: '4px', paddingBottom: '10px' }}
                        icon={<FontAwesomeIcon icon={faUserGraduate} size='2x' style={{ textAlign: 'center', height: '30px' }} />}
                    >
                        <h3 className="vertical-timeline-element-title">Diplôme: Titre RNCP niveau 6</h3>
                        <br />
                        <h5 className="vertical-timeline-element-subtitle">La Capsule (Coding bootcamp) - Développeur web et mobile Fullstack JavaScript</h5>
                        <br />
                        <List>
                            <li>Conception et prototypage d’applications web et mobile</li>
                            <li>Programmation Front-end : HTML 5 / CSS / JavaScript / React / Redux</li>
                            <li>Programmation Back-end : Node.JS / Express</li>
                            <li>Base de données : Mongo DB</li>
                            <li>Programmation mobile : React Native</li>
                            <li>Workflow : Git / Github</li>
                        </List>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="De 2018 à 2021"
                        iconStyle={{ background: '#FFD54F', color: '#fff', paddingRight: '8px', paddingBottom: '8px' }}
                        icon={<FontAwesomeIcon icon={faToolbox} size='2x' style={{ textAlign: 'center', height: '30px' }} />}
                    >
                        <h3 className="vertical-timeline-element-title">Responsable de stock</h3>
                        <br />
                        <h5 className="vertical-timeline-element-subtitle">Versace, Paris</h5>
                        <br />
                        <List>
                            <li>Management des équipes de stock</li>
                            <li>Pilotage des flux de stock</li>
                            <li>Organisation des inventaires fiscaux et tournants</li>
                            <li>Garant du respect des procédures stock</li>
                        </List>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="De 2014 à 2018"
                        iconStyle={{ background: '#FFD54F', color: '#fff', paddingRight: '8px', paddingBottom: '8px' }}
                        icon={<FontAwesomeIcon icon={faToolbox} size='2x' style={{ textAlign: 'center', height: '30px' }} />}
                    >
                        <h3 className="vertical-timeline-element-title">Responsable de stock</h3>
                        <br />
                        <h5 className="vertical-timeline-element-subtitle">Ermenegildo Zegna, Paris</h5>
                        <br />
                        <List>
                            <li>Gestion des équipes de stock</li>
                            <li>Supervise les entrées et sorties de stock</li>
                            <li>Organisation du planning des inventaires</li>
                            <li>Gestion des commandes E-commerce</li>
                            <li>En charge de l'organisation des retours de collections</li>
                        </List>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="De 2007 à 2014"
                        iconStyle={{ background: '#FFD54F', color: '#fff', paddingRight: '8px', paddingBottom: '8px' }}
                        icon={<FontAwesomeIcon icon={faToolbox} size='2x' style={{ textAlign: 'center', height: '30px' }} />}
                    >
                        <h3 className="vertical-timeline-element-title">Stockiste, Paris</h3>
                        <p>
                            Polo Ralph Lauren, Loro Piana, Christian Dior, Ermenegildo Zegna
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2006"
                        iconStyle={{ background: '#A5D6A7', color: '#fff', paddingRight: '4px', paddingBottom: '10px' }}
                        icon={<FontAwesomeIcon icon={faUserGraduate} size='2x' style={{ textAlign: 'center', height: '30px' }} />}
                    >
                        <h3 className="vertical-timeline-element-title">Diplôme : Obtention du Baccalauréat STT</h3>
                        <p>
                            Lycée Léonard de Vinci, Tremblay-en-France
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </Row>
        </Container>
    )
}

export default Experiences