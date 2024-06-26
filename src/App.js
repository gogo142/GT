import './App.css';
import Header from './components/Header';
import bg from './Images/cars.jpg'

function App() {

  const style = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center', 
  }

  return (
    <main className="h-screen w-screen" style={style}>
     <Header />

    <div className='h-full w-full flex flex-col justify-center px-[4rem]'>
      <h1 className='text-[#98ec65] font-bold text-[5rem]'>Creative</h1>
      <h3 className='text-white text-[2rem] font-bold'>design studio</h3>

      <button className='w-[10rem] py-[6px] bg-[#98ec65] rounded-3xl hover:bg-[#81e047] mt-[1rem]'>Explore Now</button>
    </div>

    </main>
  );
}

export default App;
