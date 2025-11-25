import { useState } from 'react';
import '../../index.css'

import googleLogo from '../../images/google-logo.png';
import googleLogoOutline from '../../images/google-logo-outline.png';

import wikipediaLogo from '../../images/wikipedia-logo.png';
import wikipediaLogoOutline from '../../images/wikipedia-logo-outline.png';

import khanLogo from '../../images/khan-academy-logo.png';
import khanLogoOutline from '../../images/khan-academy-logo-outline.png';

import youtubeLogo from '../../images/youtube-logo.png';
import youtubeLogoOutline from '../../images/youtube-logo-outline.png';

function Search() {
  const [activeEngine, setActiveEngine] = useState('');
  const [query, setQuery] = useState(''); 

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Use the state variable for submission check
    if (query.trim() && activeEngine) {
      // You must use the state variable 'query' instead of formData.get('query')
      switch (activeEngine) {
        case 'Google': window.location.href = `https://www.google.com/search?q=${query}`
        break
        case 'Wikipedia': window.location.href = `https://wikipedia.com/wiki/${query}`
        break
        case 'Khan': window.location.href = `https://www.khanacademy.org/search?referer=%252F&page_search_query=${query}`
        break
        case 'Youtube': window.location.href = `https://www.youtube.com/results?search_query=${query}`
        break
      }
    }
  }

  // Helper variable to check if both conditions are met:
  const isSearchReady = query.trim() !== '' && activeEngine !== '';

  return (
    <div className="flex items-center justify-center backdrop-blur-2xl bg-white border-4 border-zinc-900 pt-8 pb-8 pl-8 pr-8 shadow-[8px_8px_0px_rgba(0,0,0,1)]">
      <form onSubmit={handleSubmit} className="flex flex-col items-center ">
      <div className='w-52 h-24 bg-saigalogo bg-contain bg-no-repeat mb-2'></div>
        <strong>Select your preferred search engine:</strong>
        <div className="flex gap-4 items-center justify-center w-80 h-12 pr-8 pl-8 mt-2 mb-4 border-none saturate-0 brightness-0 ">
          
        <img
          className={`hover:scale-90 ease-in-out duration-100 cursor-pointer opacity-100 ${activeEngine === 'Google' ? '' : ''}`}
          onClick={() => setActiveEngine('Google')}
          width="50"
          height="50"
          src={activeEngine === 'Google' ? googleLogo : googleLogoOutline}
          alt="google-logo"
        />

        <img
          className={`hover:scale-90 ease-in-out duration-100 cursor-pointer opacity-100 ${activeEngine === 'Wikipedia' ? '' : ''}`}
          onClick={() => setActiveEngine('Wikipedia')}
          width="50"
          height="50"
          src={activeEngine === 'Wikipedia' ? wikipediaLogo : wikipediaLogoOutline}
          alt="wikipedia"
        />

        <img
          className={`hover:scale-90 ease-in-out duration-100 cursor-pointer opacity-100 ${activeEngine === 'Khan' ? '' : ''}`}
          onClick={() => setActiveEngine('Khan')}
          width="50"
          height="50"
          src={activeEngine === 'Khan' ? khanLogo : khanLogoOutline}
          alt="khan-academy"
        />

        <img
          className={`hover:scale-90 ease-in-out duration-100 cursor-pointer opacity-100 ${activeEngine === 'Youtube' ? '' : ''}`}
          onClick={() => setActiveEngine('Youtube')}
          width="50"
          height="50"
          src={activeEngine === 'Youtube' ? youtubeLogo : youtubeLogoOutline}
          alt="youtube-play"
        />

        </div>
        <div className='pb-4'> 
          <input
            className=" min-w-[24rem] py-2 border-2 border-zinc-900 outline-none text-center drop-shadow" 
            type="text"
            placeholder="What would you like to learn?"
            name="query"
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
          />          
            <button 
              disabled={!isSearchReady}
              className={`w-24 border-b-2 border-r-2 border-t-2 px-4 pt-2 pb-2 rounded-r-md ease-in-out duration-200
                ${isSearchReady
                  ? 'text-white bg-zinc-900 border-zinc-900  hover:cursor-pointer hover:'
                  : 'cursor-default text-zinc-300'
                }
              `}>
              Search
            </button>
        </div>
        <em>“Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.”</em>
        <strong>Richard Feynman</strong>
        </form>
    </div>
  )
}

export default Search