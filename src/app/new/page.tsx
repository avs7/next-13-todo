export default function New() {
  return (
    <>
      <header className='flex justify-between items-center mb-4'>
        <h1 className='text-2xl'> New Item</h1>
      </header>
      <form>
        <input
          type='text'
          name='title'
          className='border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none'
        />
      </form>
    </>
  )
}
