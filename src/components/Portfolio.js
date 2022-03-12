import React from 'react'

export const Portfolio = () => {
  return (
    <div>
          <section id="my-work">
        <h2>My work</h2>
        <div class="projects-container">

            <a href="http://memegram2022.herokuapp.com/" target="_blank">
                <div class="project-container-1">
                    <article class="project1" >
                            <h3>Memegram</h3>
                            <h4>Node, Sequelize, Handlebars, Multer</h4>
                    </article>
                </div>
            </a>
                
            <div class="project-container-2">

            <a href="https://collin-beisel-tm.github.io/game-grab" target="_blank">
                <div>
                    <article class="project-card project2-img">
                        <h3>Game Grab</h3>
                        <h4>JS, Bulma, 3rd Party API's</h4>
                    </article>
                </div>
            </a>
                
            <a href="https://collin-beisel-tm.github.io/weather-now/" target="_blank">
                <div>
                    <article class="project-card project3-img">
                        <h3>Weather Now</h3>
                        <h4>JS, Bootstrap, 3rd Party API's</h4>
                    </article>
                </div>
            </a>
            </div>
            <div class="project-container-3">
                   
                <a href="https://collin-beisel-tm.github.io/build-a-day/" target="_blank">
                    <div>
                        <article class="project-card project4-img">
                            <h3>Build a Day</h3>
                            <h4>JS, Bootstrap, 3rd Party API's</h4>
                        </article>
                    </div>
                    </a>

                    
                <a href="https://collin-beisel-tm.github.io/password-generator/" target="_blank">
                    <div>
                        <article class="project-card project5-img">
                            <h3>Pswd Generator</h3>
                            <h4>JS, HTML, CSS</h4>
                        </article>
                    </div>
                </a>
            </div>
            
        </div>
    </section>
    </div>
  )
}


