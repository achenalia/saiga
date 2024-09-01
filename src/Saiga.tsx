import Panel from './components/Panel/Panel'
import Search from './components/Search/Search'
import './Saiga.css'

function Saiga() {

  return (
    <div className="flex flex-col max-w-svw mx-auto p-4 overflow-y-hidden h-screen items-center justify-center">
      <Search />
      <Panel />
    </div>
  )
}

export default Saiga

