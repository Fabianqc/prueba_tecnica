import React, { useState, useRef, useEffect } from 'react';
import './login.css'


export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef(null);
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isLangOpen && langRef.current && !langRef.current.contains(event.target)) {
        setIsLangOpen(false);
      };

      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      };
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    };

  }, [isLangOpen, isMenuOpen])
  return (
    <div className='login-wrapper'>
      <div className='background-image'></div>
      <nav className='top-nav' ref={menuRef}>
        <div className='logo-container'>
          <img src="https://storage.123fakturera.se/public/icons/diamond.png"
            alt='logo'
            className='logo'
          />
        </div>
        <div className='nav-right'>
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li>Hem</li>
            <li>Priser</li>
            <li>Funktioner</li>
            <li>Kontakta oss</li>
          </ul>
          <div className='lang-container' ref={langRef}>
            <div className='lang-switcher' onClick={() => setIsLangOpen(!isLangOpen)}>
              <img src="https://storage.123fakturere.no/public/flags/SE.png"
                alt="SE"
                className='flag-icon'
              />
              <span className='lang-text'>Svenska</span>
              <svg className={`arrow-icon ${isLangOpen ? 'rotate' : ''}`} width='12px' height='12px' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'><path d='m6 9 6 6 6-6' /></svg>
            </div>

            
              <ul className={`lang-dropdown ${isLangOpen ? 'show':''}`}>
                <li className='lang-option'>
                  <img
                    src='https://storage.123fakturere.no/public/flags/SE.png'
                    alt='SE'
                    className='flag-icon'
                  />
                  <span>Svenska</span>
                </li>
                <li className='lang-option'>
                  <img
                    src='https://storage.123fakturere.no/public/flags/GB.png'
                    alt='GB'
                    className='flag-icon'
                  />
                  <span>English</span>

                </li>

              </ul>
          </div>
          <div className='hamburger' onClick={(e) => setIsMenuOpen(!isMenuOpen)}>
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
              <label> Skriv in din epost adress</label>
              <input
                type='email'
                placeholder='Epost adress'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className='input-group'>
              <label>Skriv in ditt lösenord</label>
              <input
                type='password'
                placeholder='Lösenord'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
        <h3>123 Fakturera</h3>
        <hr ></hr>
        <p>© Lättfaktura, CRO no. 638537, 2025. All rights reserved.</p>
      </footer>
    </div>
  )
}