import { useState } from 'react';
import '../../index.css'
function Search() {
  const [activeEngine, setActiveEngine] = useState('Google');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
  }

  return (
    <div className="flex items-center justify-center backdrop-blur-md bg-white/30 border-2 border-zinc-900 pt-8 pb-8 pl-8 pr-8 rounded-xl">
      <form onSubmit={handleSubmit} className="flex flex-col items-center ">
      <div className='w-52 h-24 bg-saigalogo bg-contain bg-no-repeat mb-4'></div>
        <div className="flex gap-4 items-center justify-center w-80 h-12 pr-8 pl-8 mt-2 mb-4 border-none rounded-md saturate-0 brightness-0">
          
          <img className="hover:scale-90 ease-in-out duration-100 cursor-pointer" onClick={() => setActiveEngine('Google')} width="50" height="50" src="https://img.icons8.com/ios-filled/50/google-logo.png" alt="google-logo"/>
          <img className="hover:scale-90 ease-in-out duration-100 cursor-pointer" onClick={() => setActiveEngine('Wikipedia')} width="50" height="50" src="https://img.icons8.com/ios-filled/50/wikipedia.png" alt="wikipedia"/>
          <img className="hover:scale-90 ease-in-out duration-100 cursor-pointer" onClick={() => setActiveEngine('Khan')} width="50" height="50" src="https://img.icons8.com/ios-filled/50/khan-academy.png" alt="khan-academy"/>
          <img className="hover:scale-90 ease-in-out duration-100 cursor-pointer" onClick={() => setActiveEngine('Youtube')} width="50" height="50" src="https://img.icons8.com/ios-filled/50/youtube-squared.png" alt="youtube-squared"/>

        </div>
        <input
          className="px-16 py-2 border-2 border-zinc-900 rounded-md outline-none mb-4 text-center drop-shadow"
          type="text"
          placeholder="What would you like to learn?"
          name="query"
        />
        <em>“Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.”</em>
        <strong>Richard Feynman</strong>
      </form>
    </div>
  )
}

export default Search

