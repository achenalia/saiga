import Stars from './components/Particles/Stars'
import Search from './components/Search/Search'
import './Saiga.css'


function Saiga() {

  return (
    <>
      <div className="flex flex-col max-w-svw mx-auto p-4 overflow-y-hidden h-screen items-center justify-center fade-in select-none">
        <Stars />
        <Search />
      </div>
    </>

  )
}

export default Saiga

