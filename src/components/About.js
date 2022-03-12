import React from 'react'
import headshot from '../Images/headshot.jpg';

export const About = () => {
    return (
        <div>
            <section id="hero-section">
                <div class="hero-container">
                    <div class="hero-name">
                        <h1>Collin Beisel</h1>
                    </div>
                    <div class="hero-slogan">
                        <h3>“The price of success is hard work, dedication to the job at hand, 
                            and the determination that whether we win or lose, we have applied 
                            the best of ourselves to the task at hand.” ― Vince Lombardi
                        </h3>
                    </div>
                    <div class="hero-image">
                       <img src={headshot} alt="Head shot of Collin Beisel" />
                    </div>
                </div>
            </section>
            <section id="get-to-know-me">
                <div class="get-to-know-me-container">
                    <h2>Get To Know Me</h2>
                    <p>
                        "Hey folks! I'm currently an IT program manager for Toyota Motors North America. I oversee some of Toyota's customer
                        facing sites like Toyota.com, ToyotaCertified.com, and Toyota.com/Racing. In my spare time I am a student learning full
                        stack web development and hope to move into a more technical position with Toyota when my program is complete. I am currently
                        proficient in  HTML, CSS, and JavaScript and will soon be learning technologies like API's, REACT, and NoSQL. In my personal life
                        I enjoy working on cars and motorcycles, riding dirt bikes, playing guitar, and spending time outdoors with my wife." - CB
                    </p>
                </div>
            </section>
        </div>
    )
};