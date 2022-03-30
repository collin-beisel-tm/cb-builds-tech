import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import memegram from '../Images/social-media.png';
import gamegrab from '../Images/game-grab-screenshot.PNG';
import weatherNow from '../Images/weather-now-screenshot.PNG';
import buildADay from '../Images/build-a-day-screenshot.PNG';
import bayleesBoards from '../Images/baylees-boards.PNG';
import budgetTracker from '../Images/budget-pwa.png';

export const Portfolio = () => {
    
  return (
    <Carousel className='mt-3 carousel'>
        <Carousel.Item className='carousel'>
            <img
            className="d-flex w-75 mx-auto"
            src={bayleesBoards}
            alt="Baylee's Boards"
            />
            <Carousel.Caption className='bg-grey carousel-caption'>
            <h3>Baylee's Boards</h3>
            <h6>Built With: REACT, MongoDB, Stripe</h6>
            <p>An E-Commerce site for charcuterie boards.</p>
            <Button className='m-1' href='https://github.com/Blakedoghyian/Baylees-Boards' target='_blank'variant="outline-dark">Github Repo</Button>
            <Button className='m-1' href='http://www.bayleesboards.com/' target='_blank'variant="outline-dark">Deployed App</Button>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel'>
            <img
            className="d-flex w-75 mx-auto"
            src={memegram}
            alt="Memegram"
            />
            <Carousel.Caption className='bg-grey carousel-caption'>
            <h3>Memegram</h3>
            <h6>Built With: Node, Sequelize, Handlebars, Multer</h6>
            <p>A social media app built as a group project for my bootcamp.</p>
            <Button className='m-1' href='https://github.com/collin-beisel-tm/Memegram' target='_blank'variant="outline-dark">Github Repo</Button>
            <Button className='m-1' href='http://memegram2022.herokuapp.com/' target='_blank'variant="outline-dark">Deployed App</Button>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel'>
            <img
            className="d-flex w-75 mx-auto"
            src={gamegrab}
            alt="Game Grab"
            />
            <Carousel.Caption className='bg-grey carousel-caption'>
            <h3>Game Grab</h3>
            <h6>Built With: JS, Bulma, 3rd Party API's</h6>
            <p>A Steam game deal finder app built as a group project for my bootcamp.</p>
            <Button className='m-1' href='https://github.com/collin-beisel-tm/game-grab' target='_blank'variant="outline-dark">Github Repo</Button>
            <Button className='m-1' href='https://collin-beisel-tm.github.io/game-grab' target='_blank'variant="outline-dark">Deployed App</Button>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel'>
            <img
            className="d-flex w-75 mx-auto"
            src={weatherNow}
            alt="weather now"
            />
            <Carousel.Caption className='bg-grey carousel-caption'>
            <h3>Weather Now</h3>
            <h6>Built With: JS, Bootstrap, 3rd Party API's</h6>
            <p>Use this app to track weather in your area.</p>
            <Button className='m-1' href='https://github.com/collin-beisel-tm/weather-now' target='_blank'variant="outline-dark">Github Repo</Button>
            <Button className='m-1' href='https://collin-beisel-tm.github.io/weather-now/' target='_blank'variant="outline-dark">Deployed App</Button>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel'>
            <img
            className="d-flex w-75 mx-auto"
            src={buildADay}
            alt="Build a Day"
            />
            <Carousel.Caption className='bg-grey carousel-caption'>
            <h3>Build a Day</h3>
            <h6>Built With: JS, Bootstrap, 3rd Party API's</h6>
            <p>A workday scheduling app.</p>
            <Button className='m-1' href='https://github.com/collin-beisel-tm/build-a-day' target='_blank'variant="outline-dark">Github Repo</Button>
            <Button className='m-1' href='https://collin-beisel-tm.github.io/build-a-day/' target='_blank'variant="outline-dark">Deployed App</Button>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel'>
            <img
            className="d-flex w-75 mx-auto"
            src={budgetTracker}
            alt="Memegram"
            />
            <Carousel.Caption className='bg-grey carousel-caption'>
            <h3>Budget Tracker PWA</h3>
            <h6>Built With: Node, JS, Express, Mongo, IndexedDB, Mongoose, Heroku</h6>
            <p>A progressive web app that allows users to track expenses.</p>
            <Button className='m-1' href='https://github.com/collin-beisel-tm/my-first-pwa' target='_blank'variant="outline-dark">Github Repo</Button>
            <Button className='m-1' href='https://agile-mountain-87033.herokuapp.com/' target='_blank'variant="outline-dark">Deployed App</Button>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  )
}


