import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Logo from "../Images/cb-builds.PNG";
import gitHub from "../Images/GitHub-Mark.png";
import linkedIn from "../Images/linkedin-logo.png";
import fb from "../Images/fb.jpg";

export const Footer = () => {
  return (
    <Container className='footer-container'>
        <Row className='footer'>
            <Col className='text-center py-3'>
                <img src={Logo} alt='Cb Builds Logo'/>
            </Col>
            <Col className='text-center py-3'>
                <h4 className='footer-text'>Build it better with CB!</h4>
            </Col>
            <Col className='text-center py-3'>
                <ul className='footer-socials'>
                    <li><a><img src={gitHub} /></a></li>
                    <li><a><img src={linkedIn} /></a></li>
                    <li><a><img src={fb} /></a></li>
                </ul>
            </Col>
        </Row>
    </Container>
  )
}


