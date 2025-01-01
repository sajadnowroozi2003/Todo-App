
const App = () => {
  return (
    <div className='bg-green-400 place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[450px] rounded-xl'>
     {/* Title */}

     <div className="flex items-center mt-7 gap-2">
      <h1 className="text-3xl font-semibold">To-Do List</h1>
     </div>

     {/* input box */}

    <div className="flex items-center my-7 bg-gray-300 rounded-full">
       <input className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600" type="text" placeholder="Add you task" />
    <button className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-semibold cursor-pointer">ADD +</button>
    </div>
   
    
    </div>
  )
}

export default App