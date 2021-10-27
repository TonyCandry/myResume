import React, { useState } from 'react'
import { PopoverBody, UncontrolledPopover } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Info() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => setMobileOpen(!mobileOpen);

  return (
    <div className='info'>
        <a href="http://linkedin.com/in/tony-candry" target='_blank' rel="noreferrer" ><FontAwesomeIcon icon={faLinkedin} color='#fff' size='2x' /></a>
        <a href="https://github.com/TonyCandry" target='_blank' rel="noreferrer" ><FontAwesomeIcon icon={faGithub} color='#fff' size='2x' /></a>
        <a class="dark" href="mailto:tony_candry@hotmail.com"><FontAwesomeIcon icon={faEnvelope} color='#fff' size='2x' /></a>

        <FontAwesomeIcon icon={faMobileAlt} color='#fff' id="PopoverLegacy" size='2x' />
        <UncontrolledPopover placement="bottom" isOpen={mobileOpen} target="PopoverLegacy" trigger='legacy' toggle={toggleMobile} >
          <PopoverBody>+33(0)6.12.84.45.63</PopoverBody>
        </UncontrolledPopover>
    </div>
  );
}

export default Info;
