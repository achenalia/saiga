import '../../index.css'
function Search() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const query = formData.get('query') as string
    window.location.href = `/search?q=${encodeURIComponent(query)}`
  }

  return (
    <div className="flex h-screen items-top justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col items-center mt-80 ml-auto mr-80">
      <div className='w-52 h-24 bg-saigalogo bg-contain bg-no-repeat mb-4'></div>
        <input
          className="px-16 py-2 border-2 border-none rounded-md outline-none mb-4 text-center"
          type="text"
          placeholder="What would you like to learn?"
          name="query"
        />
        <p>Photograph By Valeriy Maleev/ Nature Picture Library</p>
      </form>
    </div>
  )
}

export default Search

