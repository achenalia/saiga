import '../../index.css'
function Search() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
  }

  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col items-center ">
      <div className='w-52 h-24 bg-saigalogo bg-contain bg-no-repeat mb-4'></div>
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

