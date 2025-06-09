import React, { useState } from 'react';
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
        <div className='flex flex-row gap-2 p-3 justify-between bg-sky-400 list-none font-[poppins]'>
          <div className='flex flex-row ml-2 py-1.5'>
            <img src="src/media/logo.png" alt="" className='h-12 w-12'/>
            <h1 className='my-auto'>Neoz</h1>
          </div>
          <div className='flex flex-row gap-2 mr-2 my-auto'>
            <div className='bg-white text-gray-700 px-4 py-2 rounded-md h-9.5 hover:bg-gray-300'>
              <Link
                to="/"
                role="menuitem"
              >
                Dashboard
              </Link>
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
              <div
                className={`absolute right-0 mt-2 w-56 z-[999] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${DDML ? 'block' : 'hidden'}`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div className="py-1" role="none">
                  <Link
                    to="/heroes"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Heroes
                  </Link>
                  <Link
                    to="/emblem"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Emblem
                  </Link>
                  <Link
                    to="/spell"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Spell
                  </Link>
                  <Link
                    to="/item"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Item
                  </Link>
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
              <div
                className={`absolute right-0 mt-2 w-56 z-[999] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${DDGame ? 'block' : 'hidden'}`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu2"
              >
                <div className="py-1" role="none">
                  <a
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Draft MLBB
                  </a>
                  <a
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Cek ID
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/heroes" element={<Heroes />} />
        <Route path="/emblem" element={<Emblem />} />
        <Route path="/spell" element={<Spell />} />
        <Route path="/item" element={<Item />} />
      </Routes>
    </Router>
  );
}

export default App;