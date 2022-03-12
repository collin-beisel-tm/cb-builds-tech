import React from 'react'

export const Contact = () => {
  return (
    <div>
        <section id="reach-out" class="reach-out">
            <div>
                <h2>Reach Out</h2>
                <p>If you're looking for some bomb.com web development work, hit me up...</p>
                <address>
                    P: (123.456.789) <br />
                    E: <a href="mailto:CBBuilds@gmail.com">CBBuilds@gmail.com</a>
                </address>
            </div>

            <div class="contact-form">
                <form action="mailto:collin.d.beisel@gmail.com" method="post" enctype="text/plain">
                    <label for="contact-name">Your Name:</label>
                    <input type="text" id="contact-name" placeholder="Your Name"/>
        
                    <label for="contact-message">Message:</label>
                    <textarea type="text" name="email" id="contact-message" placeholder="Message"></textarea>

                    <button type="submit">Submit</button>
                </form>
                </div>
        </section>
    </div>
  )
}
