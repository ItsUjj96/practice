import React from 'react'
import twitter from '../images/twitter.avif'
import facebook from '../images/facebook.avif'
import git from '../images/git.png'
import hash from '../images/hash.png'

const Footer = () => {
  return (
    <footer>
      <nav>
        <ul>
          <li>Home</li>
          <li>Key Features</li>
          <li>Pricing</li>
          <li>Testimonials</li>
          <li>FAQ</li>
        </ul>
      </nav>
      <div className='social-icons'>
        <img src={facebook} alt='facebook'/>
        <img src={twitter} alt='Twitter'/>
        <img src={hash} alt='hashtag'/>
        <img src={git} alt='github'/>
      </div>
      <p>Copyright @applab</p>
    </footer>
  )
}

export default Footer
