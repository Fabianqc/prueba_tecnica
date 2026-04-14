import React, { useState, useRef, useEffect } from 'react';
import './login.css'
import { useNavigate } from 'react-router-dom';

import useTranslations from '../hooks/useTranslations';


export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef(null);
  const menuRef = useRef(null)

  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [lang, setLang] = useState('sv');
  const { t, loading: translationsLoading } = useTranslations(lang);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Login failed');
        return;
      }

      sessionStorage.setItem('accessToken', data.accessToken);
      navigate('pricelist');

    } catch (error) {
      setError('Connection error. Please try again later.')
    } finally {
      setLoading(false);
    }
  }

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
            <li>{t('nav.home')}</li>
            <li>{t('nav.prices')}</li>
            <li>{t('nav.features')}</li>
            <li>{t('nav.contact')}</li>
          </ul>
          <div className='lang-container' ref={langRef}>
            <div className='lang-switcher' onClick={() => setIsLangOpen(!isLangOpen)}>
              <img src={lang === 'sv'
                ?
                "https://storage.123fakturere.no/public/flags/SE.png" :
                "https://storage.123fakturere.no/public/flags/GB.png"}
                alt={lang === 'sv' ? 'SE' : 'EN'}
                className='flag-icon'
              />
              <span className='lang-text'>{lang === 'sv' ? 'Svenska' : 'English'}</span>
              <svg className={`arrow-icon ${isLangOpen ? 'rotate' : ''}`} width='12px' height='12px' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'><path d='m6 9 6 6 6-6' /></svg>
            </div>


            <ul className={`lang-dropdown ${isLangOpen ? 'show' : ''}`}>
              <li className='lang-option' onClick={() => {setLang('sv'); setIsLangOpen(false)}}>
                <img
                  src='https://storage.123fakturere.no/public/flags/SE.png'
                  alt='SE'
                  className='flag-icon'
                />
                <span>Svenska</span>
              </li>
              <li className='lang-option' onClick={() => {setLang('en'); setIsLangOpen(false)}}>
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
          <h2 className='login-title'>{t('login.title')}</h2>
          <form className='login-form' onSubmit={handleSubmit}>
            <div className='input-group'>
              <label>{t('login.email_label')}</label>
              <input
                type='email'
                placeholder={t('login.email_placeholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className='input-group'>
              <label>{t('login.password_label')}</label>
              <input
                type='password'
                placeholder={t('login.password_placeholder')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type='submit' className='login-btn'>{t('login.submit')}</button>
          </form>
          {error && <p style={{ color: 'red', marginTop: '10px', fontSize: '14px' }}> {error} </p>}
          <div className='login-links'>
            <a href="#register">{t('login.register')}</a>
            <a href="#forgot-password">{t('login.forgot_password')}</a>
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