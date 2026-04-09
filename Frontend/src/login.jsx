import React, { useState } from 'react';
import './login.css'

export default function Login() {
  return (
    <div className='login-wrapper'>
      <div className='background-image'>
        <nav className='top-nav'>
          <div className='logo-container'>
            <img src="https://storage.123fakturera.se/public/icons/diamond.png"
              alt='logo'
              className='logo'
            />
          </div>
          <div className='nav-right'>
            <ul className='nav-links'>
              <li>Hem</li>
              <li>Priser</li>
              <li>Funktioner</li>
              <li>Kontakta oss</li>
            </ul>
            <div className='lang-switcher'>
              <img src="https://storage.123fakturere.no/public/flags/SE.png"
                alt="Inställningar"
                className='flag-icon'
              />
              <span className='lang-text'>Svenska</span>
            </div>

            <div className='hamburger'>
              <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox=' 0 0 24 24'
                height='32px' width='32px' xmlns='http://www.w3.org/2000/svg'>
                <path d='M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z'></path>
              </svg>
            </div>
          </div>
        </nav>

        <main className='login-content'>
          <div className='login-card'>
            <h2 className='login-title'>Logga in</h2>
            <form className='login-form' onSubmit={console.log('submit')}>
              <div className='input-group'>
                <label> E-post</label>
                <input
                  type='email'
                  value='0'
                  onChange={console.log('change')}
                  required
                />
              </div>

              <div className='input-group'>
                <label>Lösenord</label>
                <input
                type='password'
                value='0'
                onChange={console.log('change')}
                required
                />
              </div>
              <button type='submit' className='login-btn'>Logga in</button>
            </form>
            <div className='login-links'>
              <a href="#register">Registrera dig</a>
              <a href="#forgot-password">Glömt lösenord?</a>
            </div>
          </div>
        </main>
        <footer className='footer'>
          <p>© 2024 123 Fakturera</p>
        </footer>
      </div>
    </div>
  )
}