import React from 'react'
import { Button } from 'react-bootstrap';

export const Resume = () => {
  return (
    <div className='skills mb-3'>
        <Button className='mb-5 bg-btn' size='lg' target="_blank" href="https://docs.google.com/document/d/1sF1xxJj3Dh67qv_51cXDJCbxsfBpxg_v/edit?usp=sharing&ouid=115403280112666854484&rtpof=true&sd=true">View/Download Resume</Button>
        <h1 className='bg-grey'>Skills</h1>
        <ul className='list-group'>
            <li className='list-group-item'><h3 className='bg-orange'>Core Languages:</h3></li>
            <li className='list-group-item'>JavaScript</li>
            <li className='list-group-item'>Node.Js</li>
            <li className='list-group-item'>HTML</li>
            <li className='list-group-item'>CSS</li>
            <li className='list-group-item'>C++</li>
        </ul>
        <ul className='list-group'>
            <li className='list-group-item'><h3 className='bg-orange'>Routing:</h3></li>
            <li className='list-group-item'>Express.js</li>
            <li className='list-group-item'>Multer.js</li>
        </ul>
        <ul className='list-group'>
            <li className='list-group-item'><h3 className='bg-orange'>Databases:</h3></li>
            <li className='list-group-item'>MySQL</li>
            <li className='list-group-item'>Sequelize ORM</li>
            <li className='list-group-item'>MongoDB</li>
            <li className='list-group-item'>Mongoose ORM</li>
        </ul>
        <ul className='list-group'>
            <li className='list-group-item'><h3 className='bg-orange'>Front End Libraries:</h3></li>
            <li className='list-group-item'>React.js</li>
            <li className='list-group-item'>HandleBars.js</li>
            <li className='list-group-item'>Redux</li>
            <li className='list-group-item'>Bootstrap.css</li>
            <li className='list-group-item'>Bulma.css</li>
        </ul>
        <ul className='list-group'>
            <li className='list-group-item'><h3 className='bg-orange'>Dev Tools:</h3></li>
            <li className='list-group-item'>Chrome DevTools</li>
            <li className='list-group-item'>Visual Studio Code</li>
            <li className='list-group-item'>Git/Github</li>
            <li className='list-group-item'>Heroku</li>
        </ul>
        <ul className='list-group'>
            <li className='list-group-item'><h3 className='bg-orange'>Certifications:</h3></li>
            <li className='list-group-item'>Certified Full-Stack Web Developer: SMU</li>
            <li className='list-group-item'>Professional Scrum Master 1: Scrum.org</li>
        </ul>
        
    </div>
  )
}

