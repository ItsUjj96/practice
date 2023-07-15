import React from 'react'
import client1 from '../images/client1.jpg'
import client2 from '../images/client2.jpg'
import client3 from '../images/client3.jpg'
import client4 from '../images/client4.jpg'
import client5 from '../images/client5.jpg'
import client6 from '../images/client6.jpg'

const TestimonialSection = () => {
  return (
    <section id='testimonials'>
      <div className='testimonial'>
          <img src={client1} alt='client1'/>
          <p>testimonial 1</p>
      </div>
      <div className='testimonial'>
          <img src={client2} alt='client2'/>
          <p>testimonial 2</p>
      </div>
      <div className='testimonial'>
          <img src={client3} alt='client3'/>
          <p>testimonial 3</p>
      </div>
      <div className='testimonial'>
          <img src={client4} alt='client4'/>
          <p>testimonial 4</p>
      </div>
      <div className='testimonial'>
          <img src={client5} alt='client5'/>
          <p>testimonial 5</p>
      </div>
      <div className='testimonial'>
          <img src={client6} alt='client6'/>
          <p>testimonial 6</p>
      </div>
    </section>
  )
}

export default TestimonialSection
