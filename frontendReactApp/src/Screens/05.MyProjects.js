import React from 'react'
import { Container, Row, Col } from 'reactstrap'

function MyProjects() {
    return (
        <Container id='realisations' style={{ marginBottom: '100px', display: 'flex', flexDirection: 'column' }}>
            <Row xs='12'>
                <h1 style={{ textAlign: 'center', marginTop: '70px', fontFamily: 'WorkRegular', marginBottom: '50px' }}>Mes réalisations</h1>
            </Row>
            <Row style={{ display: 'flex', justifyContent: 'center', flexDirection: 'Row' }}>
                <Col xs='12' md='4'>
                    <div style={{ backgroundColor: 'yellow', height: '300px' }}>
                    </div>
                </Col>
                <Col xs='12' md='4'>
                    <div style={{ backgroundColor: 'red', height: '300px' }}>
                    </div>
                </Col>
                <Col xs='12' md='4'>
                    <div style={{ backgroundColor: 'blue', height: '300px' }}>
                    </div>
                </Col>
            </Row>
            <Row style={{ display: 'flex', justifyContent: 'center', flexDirection: 'Row' }}>
                <Col xs='12' md='4'>
                    <div style={{ backgroundColor: 'green', height: '300px' }}>
                    </div>
                </Col>
                <Col xs='12' md='4'>
                    <div style={{ backgroundColor: 'grey', height: '300px' }}>
                    </div>
                </Col>

                <Col xs='12' md='4'>
                    <div style={{ backgroundColor: 'orange', height: '300px' }}>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default MyProjects