import React from 'react'

const Contact = () => {
  return (
    <div className='Contact'>
      <h2 className="contact-title">You can reach me at</h2>
      <ul className="contact-list">
        <li className="contact-info">
          <a
            rel='noopener noreferrer'
            target="_blank"
            href="mailto:sam.walker@comcast.net?Subject=In%20regards%20to%20your%20profile"
          >
            sam.walker@comcast.net
        </a>
        </li>
        <li className="contact-info">
          <a
            rel='noopener noreferrer'
            target="_blank"
            href="https://github.com/NasalJack"
          >
            github.com/NasalJack
        </a>
        </li>
        <li className="contact-info">
          <a
            rel='noopener noreferrer'
            target="_blank"
            href="https://www.linkedin.com/in/sam-walker-25aba918b/"
          >
            Linkedin
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Contact
