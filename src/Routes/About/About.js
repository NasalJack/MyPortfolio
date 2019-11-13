import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="About about-page">
      <div className="about">I'm a full stack developer and (future) graduate of the Thinkful Full Stack Web Development bootcamp. I'm an avid coder because every challenge I'm presented with is just another puzzle or riddle waiting to be solved. I love finding ways to minimize and optimize the code I've written to achieve the cleanest possible solution.</div>
      <div className="about">Outside of coding I'm a video gamer, board gamer, and card gamer. I also enjoy playing tennis, bike riding, hiking, rock climbing, and binging quality television.</div>
      <Link to='projects'><button className="project-link">View my Projects</button></Link>
    </div>
  )
}

export default About
