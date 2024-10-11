import './App.css';


function App() {
const onManu =(e)=>{
  const btn =document.querySelector('.manubtn')
const manu = document.querySelector('.manu') 


if(btn){
  manu.classList.toggle('hidden')
  if (manu.classList.contains('hidden')) {
    btn.innerHTML = 'Menu';
  } else {
  }
}

 console.log()
}

  return (
    <div>
      <header className='bg-white md:relative md:z-10'>
        <nav className='border-t-4 border-gray-500  border-b-4 border-gray-500 md:flex md:gap-[40%] md:absolute  md:items-center w-[100%] bg-white'>
          <div className='md:absolute left-20'>
     <img className=' p-3 w-20 h-20 rounded-full' src='https://www.onlinelogomaker.com/blog/wp-content/uploads/2020/09/1dbb4a00f3b2d8e85691bea98a621885.jpg'></img>
     </div>

     <div className='manu  border-4 border-gray-500 md:border-0   p-7 md:static md:relative  md:bg-gray bg-white  md:w-auto md:min-h-fit min-h-[30vh]        md:left-[40%] top-[10%] w-full right-20px m-right-20px hidden md:block'>

      <ul className='  flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-3'>

     <li>
     <a className='hover:text-gray-400 font-bold' href='#'>Home</a>
     </li>

     <li> 
     <a className='hover:text-gray-400 font-bold' href='#'>Developers</a>
     </li>

     <li> 
     <a className='hover:text-gray-400 font-bold' href='#'>Resorce</a>
     </li>
     <li> 
     <a className='hover:text-gray-400 font-bold' href='#'>About</a>
     </li>
     <li> 
     <a className='hover:text-gray-400 font-bold' href='#'>Contact</a>
     </li>
      </ul></div>
      <div>
        <button className='manubtn p-2 absolute w-[70px] left-[80%] top-[3%] border-2 hover:border-gray-500 hover:bg-[gray] hover:text-[white] rounded-full md:hidden cursor-pointer' onClick={onManu} >Manu</button>
      </div>
     
     </nav>
     </header>
     <div  className='flex justify-center relative items-center 
     bg-gradient-to-t from-[gold] to-[gray] md:h-screen h-screen'>
      <h1 className='md:font-bold md:text-5xl text-3xl'>Hello Word</h1>
      </div>
     <footer className="bg-gray-800 text-white py-4">
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
    <div className="text-center md:text-left">
      <p>&copy; 2024 Aashiq Hussain. All rights reserved.</p>
    </div>
    <div className="flex gap-4 mt-2 md:mt-0">
      <a href="#" className="hover:text-gray-400">Privacy Policy</a>
      <a href="#" className="hover:text-gray-400">Terms of Service</a>
      <a href="#" className="hover:text-gray-400">Contact</a>
    </div>
  </div>
</footer>

    </div>
    
   
  );
}

export default App;
