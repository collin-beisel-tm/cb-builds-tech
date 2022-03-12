import React from 'react'
import 'react-bootstrap';
import Logo from "../Images/cb-builds.PNG";

export const Footer = () => {
  return (
    <section class="footer-container" sticky="bottom">  
         <div class="footer">
             <div class="footer-logo">
                <a href="/"><img src={Logo} alt="cb builds logo" /></a>
             </div>
            <div class="footer-text">
                <h3>Made with ❤️ by yours truly! - Collin Beisel</h3>
            </div>

            <div class="footer-socials">
                <a href="https://linkedin.com/in/collin-beisel" target="_blank">
                    <h4>LinkedIn</h4>
                </a>
                <a href="https://github.com/collin-beisel-tm" target="_blank">
                    <h4>GitHub</h4>
                </a>
                <a href="https://facebook.com/collin.beisel" target="_blank">
                    <h4>Facebook</h4>
                </a>
            </div>
        </div>
    </section>
  )
}


