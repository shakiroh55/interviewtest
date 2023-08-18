import React from 'react'
import '../Hero/Hero.css'
import interviewImage from '../../image/interview_img.webp'
function Hero () {
  return (
    <section className='hero'>
      <div className='content'>
        <h1 id='missed'>We've Missed You </h1>
        <p className='firstAccess'>
          Kindly signin and get first access to the very best, community and
          unlock more opportunities.
        </p>
        <form className='form'>
          <p>
            <label htmlFor='email'>Email:</label>
            <input type='text' id='inputText1' />
          </p>
          <p>
            <label htmlFor='password'>Password:</label>
            <input type='text' id='inputText2' />
          </p>
          <button id='login'>Login</button>
          <p className='username'>Forgot username or password?</p>
          <p className='username'>
            Don't have an account? <span className='signUpColor'>Sign up</span>
          </p>
        </form>
      </div>
      <div id='sectionImage'>
        <img src={interviewImage} alt='This is an image' />
      </div>
    </section>
  )
}

export default Hero
