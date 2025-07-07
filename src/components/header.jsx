import React, { useState, useEffect } from 'react';
import { CircleFlag } from 'react-circle-flags'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../App.css';
import '../css/font.css';
import Dashboard from '../pages/index';
import Heroes from '../pages/heroes';
import Emblem from '../pages/emblem';
import Spell from '../pages/spell';
import Item from '../pages/item';

function App() {
  const [DDML, setDDMLBB] = useState(false);
  const [DDGame, setDDGame] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [lang, setLang] = useState('id');
  const [showLangPopup, setShowLangPopup] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);
      if (desktop) {
        setShowMobileSearch(false); // Always show menu/search on desktop
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-close mobile search when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowMobileSearch(false);
      }
    };
    window.addEventListener('resize', handleResize);
    // Initial check
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close popup on click outside
  useEffect(() => {
    if (!showLangPopup) return;
    const handleClick = (e) => {
      if (!e.target.closest('#lang-popup') && !e.target.closest('#lang-btn')) {
        setShowLangPopup(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showLangPopup]);

  const DDMLBB = () => {
    if (DDML){
      setDDMLBB(false);
      setDDGame(false);
    } else {
      setDDMLBB(true);
      setDDGame(false);
    }
  }

    const DDGAME = () => {
    if (DDGame){
      setDDMLBB(false);
      setDDGame(false);
    } else {
      setDDGame(true);
      setDDMLBB(false);
    }
  }

  

  return (
    <Router>
      <section>
        <div className='fixed top-0 left-0 w-full flex flex-col gap-2 p-3 bg-sky-500/50 backdrop-blur-lg list-none font-[poppins] z-50 shadow-md'>
          <div className='flex flex-row items-center justify-between px-16'>
            <img src="src/media/logo.png" alt="" className='h-14 w-14 pointer-events-none'/>
            {/* Search input: icon on mobile, input on desktop */}
            <input className='bg-gray-300 p-2 rounded-lg hidden md:block' type="text" placeholder='Search' />
            <div className="flex items-center gap-2">
              {/* Search icon or close button on mobile */}
              {!isDesktop && (showMobileSearch ? (
                <button className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-lg text-white text-2xl mr-2" onClick={() => setShowMobileSearch(false)} aria-label="Close search">✕</button>
              ) : (
                <button
                  className="md:hidden flex items-center justify-center w-10 h-10 border border-gray-400 rounded-lg mr-2"
                  onClick={() => setShowMobileSearch(true)}
                  aria-label="Open search"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                </button>
              ))}
              {/* Language selector button */}
              <button
                id="lang-btn"
                className={`flex items-center gap-2 px-3 py-2 rounded-lg border-2 border-yellow-400 bg-white/80 font-semibold text-gray-800 shadow transition hover:bg-yellow-50 ml-2`}
                onClick={() => setShowLangPopup(true)}
              >
                <CircleFlag countryCode={lang === 'id' ? 'id' : 'gb'} className="inline-block w-8 h-8" />
                <span>{lang === 'id' ? 'ID' : 'EN'}</span>
              </button>
              {/* Sidebar hamburger icon (only on small screens) */}
              <button
                className="md:hidden flex flex-col justify-center items-center w-10 h-10 ml-2"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                aria-label="Open menu"
              >
                <span className="block w-7 h-1 bg-gray-700 rounded mb-1"></span>
                <span className="block w-7 h-1 bg-gray-700 rounded mb-1"></span>
                <span className="block w-7 h-1 bg-gray-700 rounded"></span>
              </button>
            </div>
          </div>
          {/* Language popup */}
          {showLangPopup && (
            <div className="fixed top-0 left-0 right-0 bottom-0 z-[99999] flex items-center justify-center bg-black/40 h-screen">
              <div id="lang-popup" className="bg-[#3a3742] rounded-2xl p-8 flex flex-col gap-6 min-w-[320px] max-w-[90vw] border-2 border-yellow-400 shadow-xl">
                <div className="text-lg font-bold text-white mb-2 text-center">Pilih Bahasa</div>
                <div className="flex gap-4">
                  <button
                    className={`flex items-center gap-2 px-5 py-3 rounded-lg w-full text-left font-semibold text-white border-2 transition ${lang==='id' ? 'border-yellow-400 bg-white/10' : 'border-transparent bg-white/5 hover:bg-yellow-100/10'}`}
                    onClick={() => { setLang('id'); setShowLangPopup(false); }}
                  >
                    <CircleFlag countryCode="id" className="inline-block w-6 h-6" />
                    <span>ID</span>
                    {lang==='id' && <span className="ml-auto text-yellow-400 text-xl">✔</span>}
                  </button>
                  <button
                    className={`flex items-center gap-2 px-5 py-3 rounded-lg w-full text-left font-semibold text-white border-2 transition ${lang==='en' ? 'border-yellow-400 bg-white/10' : 'border-transparent bg-white/5 hover:bg-yellow-100/10'}`}
                    onClick={() => { setLang('en'); setShowLangPopup(false); }}
                  >
                    <CircleFlag countryCode="gb" className="inline-block w-6 h-6" />
                    <span>EN</span>
                    {lang==='en' && <span className="ml-auto text-yellow-400 text-xl">✔</span>}
                  </button>
                </div>
              </div>
            </div>
          )}
          <hr className="border-t border-sky-200/60 hidden md:block" />
          {/* Main menu: always show on desktop, or on mobile if not searching */}
          {!showMobileSearch && (
            <div className='hidden md:flex flex-row gap-2 mr-2 my-auto px-16'>
              <div className='bg-white text-gray-700 px-4 py-2 rounded-md h-9.5 hover:bg-gray-300'>
                <Link to="/" role="menuitem">Dashboard</Link>
              </div>
              <div className='relative inline-block text-left'>
                <div>
                  <button
                    type="button"
                    className={`flex justify-center w-full rounded-md border my-auto  border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-300 ${DDML ? 'bg-gray-200' : ''}`}
                    onClick={DDMLBB}
                    id="options-menu"
                    aria-haspopup="true"
                    aria-expanded={DDML ? 'true' : 'false'}
                  >
                    MLBB
                    <svg
                      className="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div className={`absolute right-0 mt-2 w-56 z-[999] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${DDML ? 'block' : 'hidden'}`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu">
                  <div className="py-1" role="none">
                    <Link to="/heroes" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Heroes</Link>
                    <Link to="/emblem" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Emblem</Link>
                    <Link to="/spell" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Spell</Link>
                    <Link to="/item" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Item</Link>
                  </div>
                </div>
              </div>
              <div className='relative inline-block text-left'>
                <div>
                  <button
                    type="button"
                    className={`inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-300 ${DDGame ? 'bg-gray-200' : ''}`}
                    onClick={DDGAME}
                    id="options-menu2"
                    aria-haspopup="true"
                    aria-expanded={DDGame ? 'true' : 'false'}
                  >
                    Game
                    <svg
                      className="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div className={`absolute right-0 mt-2 w-56 z-[999] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${DDGame ? 'block' : 'hidden'}`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu2">
                  <div className="py-1" role="none">
                    <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Draft MLBB</a>
                    <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Cek ID</a>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Mobile search bar: only show when searching, hide menu (mobile only) */}
          {!isDesktop && showMobileSearch && (
            <div className="md:hidden flex flex-col items-start w-full mt-2">
              <div className="flex items-center w-full px-2">
                <input className="flex-1 bg-[#3a3742] text-white p-3 rounded-lg outline-none border-2 border-yellow-400 placeholder-gray-300 text-lg" type="text" placeholder="Cari Game atau Voucher" autoFocus />
              </div>
            </div>
          )}
        </div>
        <div className='h-[145px]'></div> {/* Spacer to prevent content from being hidden behind the fixed header */}
      </section>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/heroes" element={<Heroes />} />
        <Route path="/emblem" element={<Emblem />} />
        <Route path="/spell" element={<Spell />} />
        <Route path="/item" element={<Item />} />
      </Routes>

      {/* Sidebar overlay and drawer (only on small screens) */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/30 md:hidden" onClick={() => setSidebarOpen(false)}>
          <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-6 flex flex-col gap-4" onClick={e => e.stopPropagation()}>
            <button className="self-end mb-4" onClick={() => setSidebarOpen(false)} aria-label="Close menu">✕</button>
            <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded" onClick={() => setSidebarOpen(false)}>Dashboard</Link>
            <button className="flex justify-between items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded" onClick={DDMLBB}>
              MLBB
              <svg className="h-5 w-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </button>
            {DDML && (
              <div className="ml-4 flex flex-col gap-1">
                <Link to="/heroes" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded" onClick={() => setSidebarOpen(false)}>Heroes</Link>
                <Link to="/emblem" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded" onClick={() => setSidebarOpen(false)}>Emblem</Link>
                <Link to="/spell" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded" onClick={() => setSidebarOpen(false)}>Spell</Link>
                <Link to="/item" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded" onClick={() => setSidebarOpen(false)}>Item</Link>
              </div>
            )}
            <button className="flex justify-between items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded" onClick={DDGAME}>
              Game
              <svg className="h-5 w-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </button>
            {DDGame && (
              <div className="ml-4 flex flex-col gap-1">
                <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Draft MLBB</a>
                <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Cek ID</a>
              </div>
            )}
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;