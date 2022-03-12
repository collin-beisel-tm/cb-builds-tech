import React from 'react';
import { Carousel } from 'react-bootstrap';
import memegram from '../Images/memegram-screenshot.PNG';
import gamegrab from '../Images/game-grab-screenshot.PNG';
import weatherNow from '../Images/weather-now-screenshot.PNG';
import buildADay from '../Images/build-a-day-screenshot.PNG';
import pswdGen from '../Images/pswd-gen.jpg';

export const Portfolio = () => {
    
  return (
    <Carousel className>
        <Carousel.Item>
            <img
            className="d-flex w-75 mx-auto"
            src={memegram}
            alt="Memegram"
            />
            <Carousel.Caption className='bg-grey'>
            <h3>Memegram</h3>
            <h4>Built With: Node, Sequelize, Handlebars, Multer</h4>
            <p>A social media app built as a group project for my bootcamp.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-flex w-75 mx-auto"
            src={gamegrab}
            alt="Game Grab"
            />
            <Carousel.Caption className='bg-grey'>
            <h3>Game Grab</h3>
            <h4>Built With: JS, Bulma, 3rd Party API's</h4>
            <p>A Steam game deal finder app built as a group project for my bootcamp.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-flex w-75 mx-auto"
            src={weatherNow}
            alt="weather now"
            />
            <Carousel.Caption className='bg-grey'>
            <h3>Weather Now</h3>
            <h4>Built With: JS, Bootstrap, 3rd Party API's</h4>
            <p>Use this app to track weather in your area.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-flex w-75 mx-auto"
            src={buildADay}
            alt="Build a Day"
            />
            <Carousel.Caption className='bg-grey'>
            <h3>Build a Day</h3>
            <h4>Built With: JS, Bootstrap, 3rd Party API's</h4>
            <p>A workday scheduling app.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-flex w-75 mx-auto"
            src={pswdGen}
            alt="Password Generator"
            />
            <Carousel.Caption className='bg-grey'>
            <h3>Password Generator</h3>
            <h4>Built With: JS, HTML, CSS</h4>
            <p>A password generating app.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-flex w-75 mx-auto"
            src={memegram}
            alt="Memegram"
            />
            <Carousel.Caption className='bg-grey'>
            <h3>Memegram</h3>
            <h4>Built With: Node, Sequelize, Handlebars, Multer</h4>
            <p>A social media app built as a group project for my bootcamp.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  )
}


