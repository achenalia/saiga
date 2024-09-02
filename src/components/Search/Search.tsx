import { useState } from 'react';
import '../../index.css'
function Search() {
  const [activeEngine, setActiveEngine] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const query = formData.get('query')
    if (query) {
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

  return (
    <div className="flex items-center justify-center backdrop-blur-2xl bg-white border-4 border-zinc-900 pt-8 pb-8 pl-8 pr-8 shadow-[8px_8px_0px_rgba(0,0,0,1)]">
      <form onSubmit={handleSubmit} className="flex flex-col items-center ">
      <div className='w-52 h-24 bg-saigalogo bg-contain bg-no-repeat mb-2'></div>
        <strong>Select your preferred search engine:</strong>
        <div className="flex gap-4 items-center justify-center w-80 h-12 pr-8 pl-8 mt-2 mb-4 border-none saturate-0 brightness-0 ">
          
          <img className={`hover:scale-90 ease-in-out duration-100 cursor-pointer opacity-100 ${activeEngine === 'Google' ? '' : ''}`} onClick={() => setActiveEngine('Google')} width="50" height="50" src={`${activeEngine === 'Google' ? 'https://img.icons8.com/ios-filled/500/google-logo.png' : 'https://img.icons8.com/ios/150/google-logo--v1.png'}`} alt="google-logo"/>
          <img className={`hover:scale-90 ease-in-out duration-100 cursor-pointer opacity-100 ${activeEngine === 'Wikipedia' ? '' : ''}`} onClick={() => setActiveEngine('Wikipedia')} width="50" height="50" src={`${activeEngine === 'Wikipedia' ? 'https://img.icons8.com/ios-filled/500/wikipedia.png' : 'https://img.icons8.com/ios/150/wikipedia.png'}`} alt="wikipedia"/>
          <img className={`hover:scale-90 ease-in-out duration-100 cursor-pointer opacity-100 ${activeEngine === 'Khan' ? '' : ''}`} onClick={() => setActiveEngine('Khan')} width="50" height="50" src={`${activeEngine === 'Khan' ? 'https://img.icons8.com/ios-filled/500/khan-academy.png' : 'https://img.icons8.com/ios/150/khan-academy.png'}`} alt="khan-academy"/>
          <img className={`hover:scale-90 ease-in-out duration-100 cursor-pointer opacity-100 ${activeEngine === 'Youtube' ? '' : ''}`} onClick={() => setActiveEngine('Youtube')} width="50" height="50" src={`${activeEngine === 'Youtube' ? 'https://img.icons8.com/ios-filled/500/youtube-play.png' : 'https://img.icons8.com/ios/150/youtube-play--v1.png'}`} alt="youtube-play"/>

        </div>
        <div>
          <input
            className="px-16 py-2 border-2 border-zinc-900 outline-none mb-4 text-center drop-shadow"
            type="text"
            placeholder="What would you like to learn?"
            name="query"
          />
          <button className={`border-t-2 border-b-2 border-r-2 border-zinc-900 px-4 py-2 cursor-default text-zinc-300 ${activeEngine !== '' ? 'text-zinc-900 hover:bg-zinc-900 hover:text-white hover:cursor-pointer ease-in-out duration-100 ' : ''}`}>Search</button>
        </div>
        <em>“Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.”</em>
        <strong>Richard Feynman</strong>
        </form>
    </div>
  )
}

export default Search

