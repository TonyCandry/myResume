import React, { useState } from 'react'
import { Container, Navbar, NavbarToggler, NavbarBrand, NavLink, Collapse } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faGripLines } from '@fortawesome/free-solid-svg-icons'


function Nav() {
    const [NavOpen, setNavOpen] = useState(false)

    const toggleNav = () => setNavOpen(!NavOpen);

    return (
        <Container fluid={true}>
            <Navbar color="dark" light fixed='top' expand='sm' style={{ width: '100%', zIndex: '100', opacity: '0.7', paddingLeft: '20px', fontFamily: 'Work' }}>
                <NavbarBrand href="#home"><FontAwesomeIcon icon={faHome} color='#FFF' style={{ marginLeft: '10px' }} /></NavbarBrand>
                <NavbarToggler style={{ marginRight: '20px' }} onClick={toggleNav} ><FontAwesomeIcon icon={faGripLines} color='#FFF' /></NavbarToggler>
                <Collapse isOpen={NavOpen} navbar >
                    <NavLink className='LinkColor' style={{ color: '#FFF' }} href="#about">A propos</NavLink>
                    <NavLink className='LinkColor' style={{ color: '#FFF' }} href="#competences">Compétences</NavLink>
                    <a href='/CV_TONYCANDRY.pdf' target="_blank" className='LinkColor' style={{ color: '#FFF', marginLeft: '16px', marginRight: '16px' }} >Parcours</a>
                    {/* <NavLink className='LinkColor' style={{ color: '#FFF' }} href="#realisations">Réalisations</NavLink> */}
                    <NavLink className='LinkColor' style={{ color: '#FFF' }} href="#contact">Contact</NavLink>
                </Collapse>
            </Navbar>
        </Container>
    )
}

export default Nav